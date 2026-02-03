import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowUpDown, Search } from "lucide-react";

import { api } from "@/api/api";
import { toast } from "sonner";

// Types based on your Mongoose model
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

export type RegistrationStatus = "pending" | "approved" | "rejected";

export interface Registration {
  _id: string;
  teamName: string;
  members: TeamMember[];
  project: Project;
  status: RegistrationStatus;
  createdAt: string;
  updatedAt: string;
}

export default function AdminDashboard() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | RegistrationStatus>(
    "all"
  );
  const [sortBy, setSortBy] = useState<"name" | "status" | "date">("date");


const fetchRegistrations = async () => {
  try {
    setIsLoading(true);
    const res = await api.get("/admin/registrations");
    if (res.data && Array.isArray(res.data.data)) {
      setRegistrations(res.data.data);
    } else {
      setRegistrations([]);
    }
  } catch (err) {
    toast.error("Failed to fetch registrations"); // <-- show toast here
  } finally {
    setIsLoading(false);
  }
};


  useEffect(() => {
    fetchRegistrations();
  }, []);

  const filteredAndSorted = useMemo(() => {
    let filtered = [...registrations];

    if (searchTerm) {
      filtered = filtered.filter((team) =>
        team.teamName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((team) => team.status === statusFilter);
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.teamName.localeCompare(b.teamName);
        case "status":
          return a.status.localeCompare(b.status);
        case "date":
        default:
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
      }
    });

    return filtered;
  }, [registrations, searchTerm, statusFilter, sortBy]);



  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Hackathon Registration Manager
          </h1>
          <p className="text-slate-400">
            Manage team registrations and approvals
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-white mb-1">
                {registrations.length}
              </div>
              <div className="text-sm text-slate-400">Total Teams</div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">
                {registrations.filter((t) => t.status === "pending").length}
              </div>
              <div className="text-sm text-slate-400">Pending Review</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="bg-slate-800/50 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white">Filters & Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search by team name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500"
                />
              </div>

              <Select
                value={statusFilter}
                onValueChange={(v) =>
                  setStatusFilter(v as "all" | RegistrationStatus)
                }
              >
                <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={sortBy}
                onValueChange={(v) =>
                  setSortBy(v as "name" | "status" | "date")
                }
              >
                <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="date">Date (Newest)</SelectItem>
                  <SelectItem value="name">Team Name</SelectItem>
                  <SelectItem value="status">Status</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Teams List */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <ArrowUpDown className="h-5 w-5" />
              Teams ({filteredAndSorted.length})
            </CardTitle>
            <CardDescription>Click on a team to view details</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-20 bg-slate-700/50" />
                ))}
              </div>
            ) : filteredAndSorted.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                No teams found
              </div>
            ) : (
              <div className="space-y-3">
                {filteredAndSorted.map((team) => (
                  <Link key={team._id} to={`/team/${team._id}`}>
                    <div className="p-4 bg-slate-700/30 hover:bg-slate-700/50 border border-slate-600/50 rounded-lg transition-colors cursor-pointer group">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {team.teamName}
                          </h3>
                          <p className="text-sm text-slate-400 mt-1">
                            {team.members.length} members • Created{" "}
                            {new Date(team.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className="border"
                        >
                          {team.status}
                        </Badge>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
