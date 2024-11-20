import React from "react";
import ShadertoyReact from "shadertoy-react";

const gptShader: string = `
float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float getGlow(vec2 pos, float seed){
    float dist = clamp(7./(length(pos)),0.,1000.);
    dist *= clamp(iTime/1.,0.1,0.0025);
    dist = pow(dist,1.5);
    return dist;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
   vec2 uv = fragCoord / iResolution.xy;
  uv.y *= iResolution.y / iResolution.x; // Correct aspect ratio

    vec3 col = vec3(0.0);

for (int i = 0; i < 13; i++) {
   float seed = float(i) * 100.0;

   
        // Random start position and offset drift to control speed
        vec2 startPosition = vec2(
            fract(cos(seed) * 43758.5453123) -.3, // Random X position
            fract(sin(seed) * 43758.5453123) + 0.1  // Random Y position
        );

        // Slow drift: left-to-right movement over time
        vec2 lightPos = startPosition + vec2(iTime * 0.05, sin(iTime * .001 * seed)*0.05); // Slow movement

        // Wrap-around when the light goes off-screen
        lightPos.x = mod(lightPos.x, 1.5)-0.3;

        // Position relative to current pixel
        vec2 pos = lightPos - uv;

        // Glow effect
        float glow = getGlow(pos, seed);

         // Independent lifecycle for each orb
        float phaseOffset = fract(sin(seed) * 43758.5453123); // Unique phase offset per orb
        float lifeCycle = fract(iTime * 0.1 + phaseOffset);   // Independent fade timing
        float fade = smoothstep(0.0, 0.5, lifeCycle) * smoothstep(1.0, 0.5, lifeCycle);

         // Add to final color with slight variation in color hues
        vec3 baseColor = vec3(0.227 * fract(seed), 0.659, 0.757);

        float colorVariation = random(vec2(seed, 0.0)); // Random value for color adjustment
        vec3 variedColor = baseColor + vec3(
            colorVariation * 0.2,      // Adjust red slightly
            colorVariation * -0.05,    // Adjust green slightly
            colorVariation * 0.3      // Adjust blue slightly
        );

         variedColor = clamp(variedColor, 0.0, 1.0); // Ensure colors stay valid
        
        col += glow * fade * variedColor;
}

 // Tone mapping for soft glow
    col = 1.0 - exp(-col);
    fragColor = vec4(col, 1.0);

}
`;

const fragmentShader: string = `
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}

float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f*f*(3.0-2.0*f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

float getGlow(vec2 pos){
    float dist = clamp(30./(length(pos)),0.00001,1000.);
    dist *= clamp(iTime/1500.,0.0001,0.0027);
    dist = pow(dist,1.1);
    return dist;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord/iResolution.xy;
    uv *= 5.;  
   	
    vec2 uv1 = uv;
    uv1.x += noise(vec2(iTime/5. + 10000.,iTime/5.));
    uv1.y += noise(vec2(iTime/5., iTime/5.));
    
    vec2 uv2 = uv;
    uv2.x += noise(vec2(iTime/5., iTime/5.));
    uv2.y += noise(vec2(iTime/5., iTime/5.));
    uv2.y += noise(vec2(iTime/5., iTime/5.));
    
    vec2 uv3 = uv;
    uv3.x += noise(vec2(iTime/5., iTime/5.));
    uv3.x += noise(vec2(iTime/5., iTime/5.));
    
    float widthHeightRatio = iResolution.x/iResolution.y;
    vec2 centre = vec2(0.8*5., 0.5*5.);
    vec2 pos1 = centre - uv1;
    pos1.y /= widthHeightRatio;
    
    vec2 pos2 = centre - uv2;
    pos2.y /= widthHeightRatio;
    
    vec2 pos3 = centre - uv3;
    pos3.y /= widthHeightRatio;
    
    float glow = getGlow(pos1);
    glow += getGlow(pos2);
    glow += getGlow(pos3);
    
    vec3 col = glow * vec3(21./255., 91./255., 121./255.);
    
    col = 1. - exp( -col );
    
    vec4 realcol = vec4(col,1.);//vec4(col*abs(sin(iTime/2.)),1.);

    fragColor = vec4(realcol);
}
`;

const HomeShader = () => <ShadertoyReact fs={gptShader} />;

export default HomeShader;
