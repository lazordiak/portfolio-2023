import React from "react";
import ShadertoyReact from "shadertoy-react";

const fragmentShader: string = `
// 2D Random
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}

float sdRoundedX( in vec2 p, in float w, in float r )
{
    p = abs(p);
    return length(p-min(p.x+p.y,w)*0.5) - r;
}

// 2D Noise based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}


float getGlow(vec2 pos){
    float dist = clamp(20./(length(pos)),0.0001,5000.);
    dist *= clamp(iTime/100.,0.0001,0.00085);
    //dist = pow((dist+clamp(sin(iTime)+noise(vec2(iTime)),-7.,-.3))/2., 1.);
    dist = pow(dist,1.4);
    return dist;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;
    //uv *= 1.;  
   	
    vec2 uv1 = uv;
    //uv1.y += sin(iTime*1.3)/3.;
    //uv1.x += noise(vec2(iTime/5. + 10000.,iTime/5.));
    /*uv1.y += noise(vec2(iTime/5., iTime/5.));*/
    
    // The ratio of the width and height of the screen
    float widthHeightRatio = iResolution.x/iResolution.y;
    vec2 centre = vec2(0.5/1.-.5, 0.5*1.);
	// Position of fragment relative to centre of screen
    vec2 pos1 = centre - uv1;
    // Adjust y by ratio for uniform transforms
    pos1.y /= widthHeightRatio;   
    
    //float glow = getGlow(pos1);
    
    float glow;
    
    //if u build the position function first, youll automatically know if the position is over 1.
    
    //lets see how we can make this go in a random direction
    /*for (float i=0.; i < min(floor(iTime),30.); i++) {
        glow += getGlow(vec2(pos1.x + i/15.,pos1.y+sin(iTime+i)/100.-.15));
    }*/
    
    float t = mod(iTime,18.);
    
    for (float i=0.; i < 18.; i++) {
        if (i>t) {break;}
        glow += getGlow(vec2(pos1.x + i/15. -.1,pos1.y+sin(iTime+i)/150.-.15));
    }
    
    //THE X
    vec2 p = (10.0*fragCoord.xy-iResolution.xy)/iResolution.y;
    p.x -= 14.5;
    p.y -= 1.5;
    // width
	float wi = 0.5 + 0.3*cos( 3. + 2.0 );
    // radious
    float ra = 0.1 + 0.08*sin(-.1*1.);

	float d = sdRoundedX( p, wi, ra );
    d = step(0.,d);
    
    vec3 glowd = d * vec3(21./255., 91./255., 121./255.);
    
    //vec3 col = vec3(100./255., 27./255., 27./255.);
    vec3 col = glow * vec3(21./255., 91./255., 121./255.);
    //col += glow * vec3(21./255., 91./255., 121./255.);
    //col += vec3(27./255., 27./255., 27./255.);
    
    col = 1. - exp( -col );
    
    if (t > 15.) {
        //col = mix(vec3(21./255., 91./255., 121./255.),col,d);
    }

    // Output to screen
    fragColor = vec4(col,1.);
}
`;

const ThesisShader = () => <ShadertoyReact fs={fragmentShader} />;

export default ThesisShader;
