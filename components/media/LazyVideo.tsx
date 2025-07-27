import React, { useState, useRef, useEffect, memo } from 'react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  title?: string;
  width?: string | number;
  height?: string | number;
  onLoad?: () => void;
  onError?: () => void;
  fill?: boolean; // Match Next.js Image component behavior
}

/**
 * LazyVideo component that implements intersection observer for lazy loading
 * and provides fallback loading states for heavy video content
 */
const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  poster,
  className = '',
  style,
  controls = false,
  autoPlay = false,
  muted = true,
  loop = false,
  title,
  width,
  height,
  onLoad,
  onError,
  fill = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px' // Start loading 50px before video comes into view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const fileSize = src.includes('SpiritVid1') ? '68MB' : 
                  src.includes('SpiritsVid2') ? '59MB' :
                  src.includes('ForagerCut') ? '30MB' : 
                  src.includes('WhereUGoVid') ? '17MB' : '';

  const containerClass = fill 
    ? `absolute inset-0 w-full h-full ${className}`
    : `relative w-full h-full ${className}`;

  return (
    <div 
      ref={containerRef}
      className={containerClass}
      style={style}
    >
      {!isInView ? (
        // Loading placeholder before video comes into view
        <div className="w-full h-full bg-gray-800 flex flex-col items-center justify-center rounded-sm">
          <div className="animate-pulse">
            <div className="w-16 h-16 bg-gray-600 rounded-full mb-4"></div>
            <div className="text-gray-400 text-sm text-center">
              Loading video...
              {fileSize && <div className="text-xs mt-1 opacity-75">{fileSize}</div>}
            </div>
          </div>
        </div>
      ) : hasError ? (
        // Error state
        <div className="w-full h-full bg-gray-800 flex items-center justify-center rounded-sm">
          <div className="text-gray-400 text-sm text-center">
            <div className="text-red-400 mb-2">⚠️</div>
            <div>Failed to load video</div>
            <div className="text-xs mt-1 opacity-75">{src}</div>
          </div>
        </div>
      ) : (
        // Actual video element
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-800 flex flex-col items-center justify-center rounded-sm z-10">
              <div className="animate-pulse">
                <div className="w-12 h-12 bg-gray-600 rounded-full mb-2"></div>
                <div className="text-gray-400 text-xs text-center">
                  Buffering...
                  {fileSize && <div className="text-xs mt-1 opacity-75">{fileSize}</div>}
                </div>
              </div>
            </div>
          )}
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            controls={controls}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            title={title}
            width={width}
            height={height}
            className={`w-full h-full object-cover rounded-sm ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
            onLoadedData={handleLoad}
            onError={handleError}
            preload="metadata" // Only load metadata initially, not full video
          >
            Your browser does not support the video tag.
          </video>
        </>
      )}
    </div>
  );
};

export default memo(LazyVideo);