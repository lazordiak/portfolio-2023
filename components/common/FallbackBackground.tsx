import { memo } from 'react';

/**
 * CSS-based animated background fallback for when WebGL shaders fail
 */
const FallbackBackground: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(58, 168, 193, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(58, 168, 193, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(58, 168, 193, 0.15) 0%, transparent 50%)
          `,
          animation: 'float 8s ease-in-out infinite'
        }}
      />
      
      {/* Floating orbs */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-moonstone opacity-20"
          style={{
            width: `${20 + i * 10}px`,
            height: `${20 + i * 10}px`,
            left: `${10 + i * 15}%`,
            top: `${20 + i * 12}%`,
            animation: `float ${4 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
            filter: 'blur(2px)',
          }}
        />
      ))}
    </div>
  );
};

export default memo(FallbackBackground);