import React from "react";
import ShadertoyReact from "shadertoy-react";

const fragmentShader: string = `
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}

float randTwinkle(vec3 p3) {
	p3  = fract(p3 * vec3(21./255., 91./255., 121./255.));
    p3 += dot(p3, p3.yzx);
    return fract((p3.x + p3.y) * p3.z);
}

float randTwinkleOffset(vec2 p) {
    vec3 p3;
	p3  = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.x + p3.y) * p3.z);
}

float lerp(float n1, float n2, float x) {
	return (3.0*x*x-2.0*x*x*x)*(n2-n1)+n1;
}

float twinkle(vec3 pos) {
    float offset = randTwinkleOffset(floor(pos.xy));
    float time = fract(pos.z+offset);
    pos.z = floor(pos.z+offset);
    return lerp(randTwinkle(pos), randTwinkle(vec3(pos.x, pos.y, pos.z+1.)), time);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
	vec2 uv = fragCoord.xy / iResolution.x;
    uv *= 10.;
    float col = 0.;
    for(float x = -2.; x <= 2.; x++) {
        for(float y = -2.; y <= 2.; y++) {
            vec2 loop = vec2(x,y);
       		vec2 pos = vec2(random(floor(uv+loop)),random(floor(uv+loop)));
            float dist = length(fract(uv)-pos-loop);
            float change = 0.00015/dist*twinkle(vec3(floor(uv+loop), iTime))*50.;
            if(change > 0.001) {
    			col += change;
            }
        }
    }
    fragColor = vec4(col*27./255.,col,col,col);
}
`;

const HackathonShader = () => <ShadertoyReact fs={fragmentShader} />;

export default HackathonShader;
