import { lazy, Suspense, memo, useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import FallbackBackground from './FallbackBackground';
import { isWebGLSupported } from '@/utils/webgl';

const HomeShaderLazy = lazy(() => import('@/shaders/HomeShader'));

interface LazyShaderProps {}

/**
 * Lazy-loaded shader component with WebGL detection and fallback
 */
const LazyShader: React.FC<LazyShaderProps> = () => {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);
  const [shaderError, setShaderError] = useState(false);

  useEffect(() => {
    // Check WebGL support on client side only
    const supported = isWebGLSupported();
    console.log('WebGL Support Check:', supported);
    if (supported) {
      // Additional WebGL capability check
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl && gl instanceof WebGLRenderingContext) {
          console.log('WebGL Renderer:', gl.getParameter(gl.RENDERER));
          console.log('WebGL Version:', gl.getParameter(gl.VERSION));
          console.log('GLSL Version:', gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
          console.log('Max Fragment Precision:', gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT));
        }
      } catch (e) {
        console.warn('WebGL capability check failed:', e);
      }
    }
    setWebglSupported(supported);
  }, []);

  // Handle shader errors
  const handleShaderError = () => {
    console.warn('Shader failed to load, falling back to CSS animation');
    setShaderError(true);
  };

  // Show fallback immediately if WebGL is not supported
  if (webglSupported === false || shaderError) {
    return <FallbackBackground />;
  }

  // Show loading while checking WebGL support
  if (webglSupported === null) {
    return <div className="w-full h-full bg-black opacity-50" />;
  }

  return (
    <Suspense fallback={<div className="w-full h-full bg-black opacity-50" />}>
      <div onError={handleShaderError}>
        <HomeShaderLazy />
      </div>
    </Suspense>
  );
};

export default memo(LazyShader);