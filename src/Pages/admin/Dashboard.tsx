import { LoaderSkeleton } from "@/components/LoaderSkeleton";
import { Table } from "@/components/Table";
import { useRegistrations } from "@/hooks/useRegistrations";
import { Error } from "@/components/Error";
import React from "react";
import { useNavigate } from "react-router-dom";
import type { Data } from "@/types/registration";

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { registrations, loading, error, refetch } = useRegistrations();
  const registrationList = registrations?.data || [];
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  const columns = [
    {
      header: "Team Name",
      accessor: (row: Data) => (
        <button
          onClick={() => navigate(`/admin/registrations/${row.id}`)}
          className="text-primary hover:text-primary-dark font-medium transition-colors"
          aria-label={`View details for ${row.teamName}`}
        >
          {row.teamName}
        </button>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-muted-bg">
      {/* Header */}
      <header className="bg-white border-b border-muted-light">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Team Registrations</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2  hover:text-danger transition-colors"
            aria-label="Logout from dashboard"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Loading State */}
        {loading && <LoaderSkeleton type="table" rows={5} />}

        {/* Error State */}
        {error && !loading && <Error error={error} onRetry={refetch} />}

        {/* Empty State */}
        {!loading && !error && registrationList.length === 0 && (
          <div className="text-center py-12 bg-white rounded border border-muted-light">
            <p className=" text-lg">No registrations found</p>
          </div>
        )}

        {/* Table */}
        {!loading && !error && registrationList.length > 0 && (
          <div className="bg-white rounded border border-muted-light">
            <Table
              data={registrationList}
              columns={columns}
              onRowClick={(row) => navigate(`/admin/registrations/${row.id}`)}
            />
          </div>
        )}

        {/* Results Count */}
        {!loading && !error && registrationList.length > 0 && (
          <p className="mt-4 text-sm ">
            Showing {registrationList.length} of {registrationList.length}{" "}
            registration
            {registrationList.length !== 1 ? "s" : ""}
          </p>
        )}
      </main>
    </div>
  );
};
