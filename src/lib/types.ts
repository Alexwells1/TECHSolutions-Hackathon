export type TeamStatus = "pending" | "approved" | "rejected";
export type MemberRole = "Leader" | "Member";

export interface Member {
  name: string;
  email: string;
  role: MemberRole;
}

export interface ProjectInfo {
  title: string;
  focusArea: string;
  problem: string;
  solution: string;
}

export interface TeamRegistration {
  id: string;
  teamName: string;
  members: Member[];
  projectInfo: ProjectInfo;
  status: TeamStatus;
  createdAt: string;
}

export interface RegistrationsResponse {
  registrations: TeamRegistration[];
  approvalCount: number;
  approvalLimit: number;
}

export interface ApprovalActionResponse {
  success: boolean;
  registration: TeamRegistration;
  approvalCount?: number;
  message: string;
}
