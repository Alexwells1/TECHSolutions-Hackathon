"use client";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, CheckCircle2, XCircle, Clock } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/api/api";

// Types matching your backend
interface TeamMember {
  name: string;
  email: string;
  role: "Leader" | "Member";
}

interface Project {
  title: string;
  focusArea: string;
  problem: string;
  solution: string;
}

type RegistrationStatus = "pending" | "approved" | "rejected";

interface Registration {
  _id: string;
  teamName: string;
  members: TeamMember[];
  project: Project;
  status: RegistrationStatus;
  createdAt: string;
  updatedAt: string;
}

export default function TeamDetailPage() {
  const navigate = useNavigate();
  const { id: teamId } = useParams<{ id: string }>();

  const [team, setTeam] = useState<Registration | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState(false);

  useEffect(() => {
    if (teamId) fetchTeamDetails();
  }, [teamId]);

  async function fetchTeamDetails() {
    setIsLoading(true);
    try {
      const response = await api.get("/admin/registrations");
      if (response.data?.data && Array.isArray(response.data.data)) {
        const foundTeam = response.data.data.find(
          (t: Registration) => t._id === teamId
        );
        setTeam(foundTeam || null);
      }
    } catch {
      toast.error("Failed to fetch team details");
    } finally {
      setIsLoading(false);
    }
  }

  const handleApprove = async () => {
    if (!team || team.status !== "pending") return;

    setIsActionLoading(true);
    try {
      const res = await api.patch(`/admin/registrations/${team._id}/approve`);
      if (res.data?.data) {
        setTeam(res.data.data);
        toast.success("Team approved successfully");
      }
    } catch {
      toast.error("Failed to approve team");
    } finally {
      setIsActionLoading(false);
    }
  };

  const handleReject = async () => {
    if (!team || team.status !== "pending") return;

    setIsActionLoading(true);
    try {
      const res = await api.patch(`/admin/registrations/${team._id}/reject`);
      if (res.data?.data) {
        setTeam(res.data.data);
        toast.success("Team rejected successfully");
      }
    } catch {
      toast.error("Failed to reject team");
    } finally {
      setIsActionLoading(false);
    }
  };

  const getStatusColor = (status: RegistrationStatus) => {
    switch (status) {
      case "approved":
        return "bg-emerald-500/10 text-emerald-700 border-emerald-200";
      case "rejected":
        return "bg-red-500/10 text-red-700 border-red-200";
      case "pending":
      default:
        return "bg-yellow-500/10 text-yellow-700 border-yellow-200";
    }
  };

  const getStatusIcon = (status: RegistrationStatus) => {
    switch (status) {
      case "approved":
        return <CheckCircle2 className="h-5 w-5 text-emerald-600" />;
      case "rejected":
        return <XCircle className="h-5 w-5 text-red-600" />;
      case "pending":
      default:
        return <Clock className="h-5 w-5 text-yellow-600" />;
    }
  };

  const canApprove = team?.status === "pending";
  const canReject = team?.status === "pending";
  const isAlreadyActioned = team && team.status !== "pending";

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6 text-slate-300 hover:text-white hover:bg-slate-700/50"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Teams
        </Button>

        {isLoading ? (
          <div className="space-y-6">
            <Skeleton className="h-20 bg-slate-700/50" />
            <Skeleton className="h-64 bg-slate-700/50" />
            <Skeleton className="h-40 bg-slate-700/50" />
          </div>
        ) : !team ? (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6 text-center text-slate-400">
              Team not found
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Header */}
            <Card className="bg-slate-800/50 border-slate-700 mb-6">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl text-white mb-2">
                      {team.teamName}
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      Created on {new Date(team.createdAt).toLocaleDateString()}
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className={`${getStatusColor(
                      team.status
                    )} border text-lg px-4 py-2 flex items-center gap-2`}
                  >
                    {getStatusIcon(team.status)}
                    {team.status}
                  </Badge>
                </div>
              </CardHeader>
            </Card>

            {/* Team Members */}
            <Card className="bg-slate-800/50 border-slate-700 mb-6">
              <CardHeader>
                <CardTitle className="text-white">Team Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {team.members.map((member, index) => (
                    <div
                      key={index}
                      className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/50 flex justify-between items-center"
                    >
                      <div>
                        <h4 className="font-semibold text-white">
                          {member.name}
                        </h4>
                        <p className="text-sm text-slate-400">{member.email}</p>
                      </div>
                      <Badge
                        variant="secondary"
                        className={`${
                          member.role === "Leader"
                            ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                            : "bg-slate-600/20 text-slate-300 border-slate-600/30"
                        } border`}
                      >
                        {member.role}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Info */}
            <Card className="bg-slate-800/50 border-slate-700 mb-6">
              <CardHeader>
                <CardTitle className="text-white">
                  Project Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-300">
                      Title
                    </label>
                    <p className="text-white mt-1">{team.project.title}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-300">
                      Focus Area
                    </label>
                    <p className="text-white mt-1">{team.project.focusArea}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-300">
                      Problem
                    </label>
                    <p className="text-white mt-1 text-sm leading-relaxed">
                      {team.project.problem}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-300">
                      Solution
                    </label>
                    <p className="text-white mt-1 text-sm leading-relaxed">
                      {team.project.solution}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Team Action</CardTitle>
                {isAlreadyActioned && (
                  <CardDescription className="text-slate-400">
                    This team has already been {team.status}.
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 flex-col sm:flex-row">
                  <Button
                    onClick={handleApprove}
                    disabled={!canApprove || isActionLoading}
                    className={`flex-1 ${
                      canApprove
                        ? "bg-emerald-600 hover:bg-emerald-700"
                        : "bg-slate-700 text-slate-500 cursor-not-allowed"
                    }`}
                  >
                    {isActionLoading ? "Processing..." : "Approve"}
                  </Button>
                  <Button
                    onClick={handleReject}
                    disabled={!canReject || isActionLoading}
                    variant="destructive"
                    className={`flex-1 ${
                      canReject
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-slate-700 text-slate-500 cursor-not-allowed"
                    }`}
                  >
                    {isActionLoading ? "Processing..." : "Reject"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </main>
  );
}
