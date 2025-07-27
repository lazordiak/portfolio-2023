/**
 * Utility functions for WebGL detection and compatibility
 */

/**
 * Check if WebGL is supported in the current browser
 */
export const isWebGLSupported = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!(gl && gl instanceof WebGLRenderingContext);
  } catch (e) {
    return false;
  }
};

/**
 * Check if WebGL2 is supported in the current browser
 */
export const isWebGL2Supported = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');
    return !!(gl && gl instanceof WebGL2RenderingContext);
  } catch (e) {
    return false;
  }
};

/**
 * Get WebGL capabilities and limitations
 */
export const getWebGLInfo = () => {
  if (!isWebGLSupported()) {
    return null;
  }

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') as WebGLRenderingContext || 
               canvas.getContext('experimental-webgl') as WebGLRenderingContext;
    
    if (!gl || !(gl instanceof WebGLRenderingContext)) return null;

    return {
      vendor: gl.getParameter(gl.VENDOR),
      renderer: gl.getParameter(gl.RENDERER),
      version: gl.getParameter(gl.VERSION),
      shadingLanguageVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
      maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),
      maxFragmentUniforms: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),
    };
  } catch (e) {
    return null;
  }
};