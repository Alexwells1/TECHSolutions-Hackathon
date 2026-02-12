import { LoaderSkeleton } from '@/components/LoaderSkeleton';
import { MemberList } from '@/components/MemberList';
import { ProjectInfo } from '@/components/ProjectInfo';
import { useRegistration } from '@/hooks/useRegistration';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Error } from "@/components/Error";

export const RegistrationDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { registration, loading, error, refetch } = useRegistration(id || '');
  const regdetails = registration?.data ;

  if (loading) {
    return (
      <div className="min-h-screen bg-muted-bg">
        <header className="bg-white border-b border-muted-light">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="text-primary hover:text-primary-dark transition-colors"
              aria-label="Go back to dashboard"
            >
              ← Back to Dashboard
            </button>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-8">
          <LoaderSkeleton type="detail" />
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-muted-bg">
        <header className="bg-white border-b border-muted-light">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="text-primary hover:text-primary-dark transition-colors"
              aria-label="Go back to dashboard"
            >
              ← Back to Dashboard
            </button>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-8">
          <Error error={error} onRetry={refetch} />
        </main>
      </div>
    );
  }

  if (!registration) {
    return (
      <div className="min-h-screen bg-muted-bg">
        <header className="bg-white border-b border-muted-light">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="text-primary hover:text-primary-dark transition-colors"
              aria-label="Go back to dashboard"
            >
              ← Back to Dashboard
            </button>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center py-12 bg-white rounded border border-muted-light">
            <p className=" text-lg">Registration not found</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted-bg">
      {/* Header */}
      <header className="bg-white border-b border-muted-light">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="text-primary hover:text-primary-dark font-medium transition-colors"
            aria-label="Go back to dashboard"
          >
            ← Back to Dashboard
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Team Name Header */}
          <div className="bg-white rounded p-6 border border-muted-light">
            <h1 className="text-3xl font-bold">{regdetails?.teamName}</h1>
          </div>

          {/* Project Information */}
          <ProjectInfo project={regdetails?.project} />

          {/* Members List */}
          <div className="bg-white rounded p-6 border border-muted-light">
            <MemberList members={regdetails?.members} />
          </div>
        </div>
      </main>
    </div>
  );
};
