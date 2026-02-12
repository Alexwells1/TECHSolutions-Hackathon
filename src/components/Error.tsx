import React from 'react';
import type { ApiError } from '../types/registration';

interface ErrorProps {
  error: ApiError;
  onRetry?: () => void;
}

export const Error: React.FC<ErrorProps> = ({ error, onRetry }) => {
  return (
    <div className="w-full p-6 bg-danger/10 border border-danger rounded" role="alert">
      <div className="flex items-start">
        <div className="flex-1">
          <h3 className="font-medium text-danger mb-1">Error</h3>
          <p className="text-muted-dark">{error.message}</p>
          {error.status && (
            <p className="text-sm text-muted mt-1">Status Code: {error.status}</p>
          )}
        </div>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-4 py-2 bg-danger text-white rounded hover:bg-danger-dark transition-colors"
          aria-label="Retry loading data"
        >
          Retry
        </button>
      )}
    </div>
  );
};
