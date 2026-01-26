import { api } from "../api/api";

export interface TeamMember {
  name: string;
  email: string;
}

export interface ProjectInfo {
  title: string;
  focusArea: string;
  problem: string;
  solution: string;
  technologies: string;
  features: string[];
}

export interface Declarations {
  mouAgreed: boolean;
  publicityConsent: boolean;
  conflict: string;
}

export interface RegistrationPayload {
  teamName: string;
  institution: string;
  teamLeaderName: string;
  teamLeaderEmail: string;
  members: TeamMember[];
  project: ProjectInfo;
  declarations: Declarations;
}

export const submitRegistration = async (payload: RegistrationPayload) => {
  const response = await api.post("/register", payload);
  return response.data;
};
