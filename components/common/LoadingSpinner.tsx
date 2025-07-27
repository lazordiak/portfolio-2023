import { memo } from 'react';

/**
 * Loading spinner component for Suspense fallbacks
 */
const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-8">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-gray-800 border-t-moonstone animate-spin"></div>
        <div className="mt-4 text-center text-sm text-gray-400">Loading...</div>
      </div>
    </div>
  );
};

export default memo(LoadingSpinner);