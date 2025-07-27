import React, { memo } from "react";
import CustomWebGLShader from "@/components/shaders/CustomWebGLShader";

/**
 * HomeShader component that renders animated floating orbs using WebGL.
 * Creates simple animated light orbs with gradient background.
 * Uses custom WebGL implementation for reliable cross-device compatibility.
 */
const HomeShader = () => <CustomWebGLShader />;

export default memo(HomeShader);
