import React, { useEffect, useRef, memo } from 'react';

interface CustomWebGLShaderProps {
  className?: string;
}

const CustomWebGLShader: React.FC<CustomWebGLShaderProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize WebGL context
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl || !(gl instanceof WebGLRenderingContext)) {
      console.warn('WebGL not supported, falling back to CSS animation');
      return;
    }

    glRef.current = gl;

    // Vertex shader source
    const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Fragment shader source recreating the original floating orbs effect
    const fragmentShaderSource = `
      precision mediump float;
      uniform vec2 u_resolution;
      uniform float u_time;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      float getGlow(vec2 pos, float seed) {
        float dist = clamp(7.0 / length(pos), 0.0, 1000.0);
        dist *= clamp(u_time / 1.0, 0.1, 0.0025);
        dist = pow(dist, 1.5);
        return dist;
      }

      void main() {
        vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        uv.x = (uv.x - 0.5) * aspect.x + 0.5;
        uv *= 0.5;

        vec3 col = vec3(0.0);
        float fadeInDuration = 1.0;
        float delayBetweenLights = 0.15;

        // Create 13 animated floating orbs with lifecycle phases
        for (int i = 0; i < 13; i++) {
          float seed = float(i) * 100.0;

          vec2 startPosition = vec2(
            fract(cos(seed) * 43758.5453123) - 0.3,
            fract(sin(seed) * 43758.5453123) + 0.1
          );

          vec2 lightPos = startPosition + vec2(u_time * 0.05, sin(u_time * 0.001 * seed) * 0.05);
          lightPos.x = mod(lightPos.x, 1.5) - 0.3;

          vec2 pos = lightPos - uv;
          float glow = getGlow(pos, seed);

          float phaseOffset = fract(sin(seed) * 43758.5453123);
          float lifeCycle = fract(u_time * 0.1 + phaseOffset);
          float fade = smoothstep(0.0, 0.5, lifeCycle) * smoothstep(1.0, 0.5, lifeCycle);

          float startTime = float(i) * delayBetweenLights;
          float fadeIn = smoothstep(startTime, startTime + fadeInDuration, u_time);
          fade *= fadeIn;

          vec3 baseColor = vec3(0.227 * fract(seed), 0.659, 0.757);
          float colorVariation = random(vec2(seed, 0.0));
          vec3 variedColor = baseColor + vec3(
            colorVariation * 0.2,
            colorVariation * -0.05,
            colorVariation * 0.3
          );

          variedColor = clamp(variedColor, 0.0, 1.0);
          col += glow * fade * variedColor;
        }

        col = 1.0 - exp(-col);
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    // Helper function to create shader
    const createShader = (gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    };

    // Create shaders
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) {
      console.error('Failed to create shaders');
      return;
    }

    // Create program
    const program = gl.createProgram();
    if (!program) {
      console.error('Failed to create program');
      return;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      return;
    }

    programRef.current = program;

    // Set up geometry (full screen quad)
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'u_time');

    // Resize canvas and update viewport
    const resizeCanvas = () => {
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };

    // Animation loop
    const render = () => {
      resizeCanvas();

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);

      // Set up position attribute
      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      // Set uniforms
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, (Date.now() - startTimeRef.current) / 1000);

      // Draw
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationRef.current = requestAnimationFrame(render);
    };

    // Start animation
    render();

    // Handle resize
    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      
      if (glRef.current && programRef.current) {
        glRef.current.deleteProgram(programRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  );
};

export default memo(CustomWebGLShader);