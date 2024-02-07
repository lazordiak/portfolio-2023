import React from "react";
import ShadertoyReact from "shadertoy-react";

const fragmentShader: string = `
// Constants
const vec3 lightColor = vec3(0.08, 0.36, 0.47);
const float ballRadius = 0.019;
const int numBalls = 10;

// Function to calculate glow effect
float calculateGlow(float distance, float radius, float intensity) {
    return intensity * pow(radius / distance, 1.3);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    // Normalize coordinates to range [-1, 1]
    vec2 uv = fragCoord / iResolution.xy;
    uv -= 0.5;
    uv *= 2.0;

    // Background color
    vec3 bgColor = vec3(0.0);
    
    fragColor.rgb = vec3(0.);

    // Draw floating balls
    for (int i = 0; i < numBalls; ++i) {
        // Define ball position and velocity based on time
        vec2 ballPos = vec2(sin(iTime * 0.3 + float(i)), cos(iTime * 0.4 + float(i))) * 0.5;
        vec2 velocity = vec2(cos(iTime * 0.2 + float(i)), sin(iTime * 0.1 + float(i)));

        // Calculate distance to ball
        float distance = length(uv - ballPos);

        // Calculate glow effect
        float glow = clamp(calculateGlow(distance, ballRadius, 1.5),0.001,1.5);
        
        //i think its bc its never 0

        // Blend ball color with background
        vec3 ballColor = mix(bgColor, lightColor, glow);

        // Draw the ball
        fragColor.rgb += ballColor;
    }
}
`;

const ForagerShader = () => <ShadertoyReact fs={fragmentShader} />;

export default ForagerShader;
