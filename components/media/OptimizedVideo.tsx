import React, { useState, useRef, useEffect, memo } from 'react';

interface OptimizedVideoProps {
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
  // Quality options for future compressed versions
  qualities?: {
    low: string;    // For slow connections
    medium: string; // Default quality
    high: string;   // Original quality
  };
}

/**
 * OptimizedVideo component with adaptive quality and progressive loading
 * Automatically detects connection speed and serves appropriate quality
 */
const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
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
  qualities
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState<string>(src);
  const [connectionSpeed, setConnectionSpeed] = useState<'slow' | 'medium' | 'fast'>('medium');
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect connection speed (simplified)
  useEffect(() => {
    // @ts-ignore - navigator.connection is experimental
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection) {
      const effectiveType = connection.effectiveType;
      if (effectiveType === '4g') {
        setConnectionSpeed('fast');
      } else if (effectiveType === '3g') {
        setConnectionSpeed('medium');
      } else {
        setConnectionSpeed('slow');
      }
    }

    // Select appropriate quality based on connection and available options
    if (qualities) {
      switch (connectionSpeed) {
        case 'slow':
          setSelectedQuality(qualities.low || qualities.medium || src);
          break;
        case 'medium':
          setSelectedQuality(qualities.medium || src);
          break;
        case 'fast':
          setSelectedQuality(qualities.high || src);
          break;
      }
    }
  }, [connectionSpeed, qualities, src]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px' // Start loading earlier for smoother UX
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

  const getFileSizeEstimate = (videoSrc: string) => {
    if (videoSrc.includes('SpiritVid1')) return '68MB → 5MB*';
    if (videoSrc.includes('SpiritsVid2')) return '59MB → 5MB*';
    if (videoSrc.includes('ForagerCut')) return '30MB → 3MB*';
    if (videoSrc.includes('WhereUGoVid')) return '17MB → 2MB*';
    return '';
  };

  const qualityBadge = connectionSpeed === 'slow' && qualities ? 'Low Quality' : 
                      connectionSpeed === 'medium' && qualities ? 'Medium Quality' : 
                      connectionSpeed === 'fast' && qualities ? 'High Quality' : '';

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      style={style}
    >
      {!isInView ? (
        // Enhanced loading placeholder
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center rounded-sm">
          <div className="text-center">
            {/* Animated loading icon */}
            <div className="w-16 h-16 mb-4 relative">
              <div className="absolute inset-0 bg-moonstone rounded-full animate-ping opacity-25"></div>
              <div className="absolute inset-2 bg-moonstone rounded-full animate-pulse opacity-50"></div>
              <div className="absolute inset-4 bg-moonstone rounded-full"></div>
            </div>
            
            {/* Loading text */}
            <div className="text-gray-300 text-sm font-medium mb-2">
              Preparing video...
            </div>
            
            {/* File size info */}
            <div className="text-gray-500 text-xs">
              {getFileSizeEstimate(src)}
            </div>
            
            {/* Connection speed indicator */}
            {qualityBadge && (
              <div className="mt-2 px-2 py-1 bg-gray-700 rounded text-xs text-gray-400">
                {qualityBadge}
              </div>
            )}
          </div>
        </div>
      ) : hasError ? (
        // Enhanced error state
        <div className="w-full h-full bg-gradient-to-br from-red-900 to-gray-900 flex items-center justify-center rounded-sm">
          <div className="text-center p-4">
            <div className="text-red-400 text-2xl mb-2">⚠️</div>
            <div className="text-red-300 text-sm font-medium mb-1">Video Load Failed</div>
            <div className="text-red-500 text-xs opacity-75">{selectedQuality}</div>
            <button 
              onClick={() => {
                setHasError(false);
                setIsLoaded(false);
                if (videoRef.current) {
                  videoRef.current.load();
                }
              }}
              className="mt-2 px-3 py-1 bg-red-700 hover:bg-red-600 text-red-200 text-xs rounded transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      ) : (
        // Video with progressive loading
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center rounded-sm z-10">
              <div className="text-center">
                {/* Buffering animation */}
                <div className="w-12 h-12 mb-3 relative">
                  <div className="absolute inset-0 border-3 border-gray-600 rounded-full"></div>
                  <div className="absolute inset-0 border-3 border-moonstone border-t-transparent rounded-full animate-spin"></div>
                </div>
                
                <div className="text-gray-300 text-sm font-medium mb-1">
                  Loading video...
                </div>
                
                <div className="text-gray-500 text-xs">
                  {getFileSizeEstimate(src)}
                </div>
                
                {qualityBadge && (
                  <div className="mt-2 px-2 py-1 bg-gray-700 rounded text-xs text-gray-400">
                    {qualityBadge}
                  </div>
                )}
              </div>
            </div>
          )}
          
          <video
            ref={videoRef}
            src={selectedQuality}
            poster={poster}
            controls={controls}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            title={title}
            width={width}
            height={height}
            className={`w-full h-full object-cover rounded-sm transition-opacity duration-500 ${
              !isLoaded ? 'opacity-0' : 'opacity-100'
            }`}
            onLoadedData={handleLoad}
            onError={handleError}
            preload="metadata"
            playsInline
          >
            {/* Multiple source support for different qualities */}
            {qualities && (
              <>
                <source src={qualities.high} type="video/mp4" media="(min-width: 1024px)" />
                <source src={qualities.medium} type="video/mp4" media="(min-width: 768px)" />
                <source src={qualities.low} type="video/mp4" />
              </>
            )}
            Your browser does not support the video tag.
          </video>
        </>
      )}
    </div>
  );
};

export default memo(OptimizedVideo);