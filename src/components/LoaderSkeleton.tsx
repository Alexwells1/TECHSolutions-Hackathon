import React from 'react';

interface LoaderSkeletonProps {
  type?: 'table' | 'card' | 'text' | 'detail';
  rows?: number;
}

export const LoaderSkeleton: React.FC<LoaderSkeletonProps> = ({ type = 'card', rows = 3 }) => {
  if (type === 'table') {
    return (
      <div className="w-full animate-pulse">
        <div className="h-12 bg-muted-light rounded mb-4"></div>
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="h-16 bg-muted-bg rounded mb-2"></div>
        ))}
      </div>
    );
  }

  if (type === 'detail') {
    return (
      <div className="animate-pulse space-y-6">
        <div className="h-10 bg-muted-light rounded w-1/3"></div>
        <div className="space-y-4">
          <div className="h-32 bg-muted-bg rounded"></div>
          <div className="h-48 bg-muted-bg rounded"></div>
        </div>
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div className="animate-pulse space-y-3">
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="h-4 bg-muted-light rounded w-full"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="animate-pulse">
      <div className="h-48 bg-muted-bg rounded"></div>
    </div>
  );
};
