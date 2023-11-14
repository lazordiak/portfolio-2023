import React from "react";
import ShadertoyReact from "shadertoy-react";

const fragmentShader: string = `
#define SC(a) vec2(sin(a), cos(a))

void mainImage( out vec4 color,  vec2 uv )
{
    vec2  R = iResolution.xy,    
     sunXY = .5 * R + R.y * SC(2. * 3.14 / 24. * iTime) * .4,    
     moonXY = R - sunXY;
 
    float dSun = sin(3.14 / (distance(sunXY,  uv) + 1.)) * 12.,
         dMoon = sin(2.00 / (distance(moonXY, uv) + 1.)) * 8.;
        
    vec4  sunColor = dSun *vec4(21./255., 91./255., 121./255.,0.),
         moonColor = dMoon*vec4(21./255., 91./255., 121./255.,0); 
    
    color = sunColor + moonColor;    
}
`;

const JournalsShader = () => <ShadertoyReact fs={fragmentShader} />;

export default JournalsShader;
