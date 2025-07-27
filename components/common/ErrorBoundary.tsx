import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error boundary component to catch and handle errors in child components.
 * Particularly useful for WebGL shader failures and other runtime errors.
 */
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Check if it's a WebGL-related error
    const isWebGLError = error.message.includes('WebGL') || 
                        error.message.includes('shader') ||
                        error.message.includes('gl_') ||
                        errorInfo.componentStack.includes('ShadertoyReact');
    
    if (isWebGLError) {
      console.warn('WebGL shader error detected - falling back to simple background');
    }
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center min-h-[200px] p-8 text-center text-snow">
          <div className="text-xl mb-4">⚠️ Something went wrong</div>
          <div className="text-sm opacity-70 mb-4">
            Unable to load this content. This might be due to WebGL compatibility issues.
          </div>
          <button
            onClick={() => this.setState({ hasError: false, error: undefined })}
            className="px-4 py-2 bg-moonstone text-white rounded hover:bg-opacity-80 transition-colors"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;