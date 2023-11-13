//these need to be checked, what is the proper way to get fragCoord and time in glsl shaders?
//varying vec2 fragCoord;

const fragmentShader = `
precision mediump float;
varying vec2 fragCoord;
uniform float iTime;
uniform vec3 iResolution;           

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

void main(void)
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

    gl_FragColor = vec4(fragCoord.x,fragCoord.y,0.5,1.0);
}
`;

//const HomeShader = () => <ShadertoyReact fs={fragmentShader} />;

import React, { FunctionComponent } from "react";
import { Shaders, Node, GLSL } from "gl-react";
const shaders = Shaders.create({
  helloBlue: {
    frag: GLSL`
precision mediump float;
varying vec2 uv;
uniform float iTime;
uniform vec3 iResolution;  

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

void main() {

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

  gl_FragColor = vec4(vec3(glow),1.0);
}`,
  },
  homeShader: {
    frag: GLSL`${fragmentShader}`,
  },
});

interface ShaderProps {
  blue: number;
}

export const HomeShader: FunctionComponent = () => {
  return <Node shader={shaders.homeShader} />;
};

export const TestShader: FunctionComponent = () => {
  return <Node shader={shaders.helloBlue} />;
};

export class HelloBlue extends React.Component {
  render() {
    return <Node shader={shaders.helloBlue} />;
  }
}
