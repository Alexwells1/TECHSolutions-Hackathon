import { useState } from "react";
import { RegisterContext } from "./RegisterContext.1";

export interface TeamInfo {
  teamName: string;
  leaderName: string;
  email: string;
  phone: string;
  institution: string;
}

export interface TeamMember {
  name: string;
  email: string;
}

export interface ProjectInfo {
  newFeature: string;
  title: string;
  focusArea: string;
  problem: string;
  solution: string;
  technologies: string;
  features: string[];
}

export interface Declarations {
  eligibilityConfirmed: boolean;
  mouAgreed: boolean;
  signature: string;
  publicityConsent: boolean;
  conflict: string;
  date?: string;
  reviewConfirmed?: boolean;
}

export interface RegisterState {
  reviewConfirmed: boolean;
  team: TeamInfo;
  members: TeamMember[];
  project: ProjectInfo;
  declarations: Declarations;
}

const defaultState: RegisterState = {
  reviewConfirmed: false,
  team: {
    teamName: "",
    leaderName: "",
    email: "",
    phone: "",
    institution: "Federal University of Agriculture, Abeokuta (FUNAAB)",
  },
  members: [{ name: "", email: "" }],
  project: {
    title: "",
    focusArea: "",
    problem: "",
    solution: "",
    technologies: "",
    features: [],
    newFeature: "",
  },
  declarations: {
    eligibilityConfirmed: false,
    mouAgreed: false,
    signature: "",
    publicityConsent: false,
    conflict: "none",
  },
};

export function RegisterProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<RegisterState>(defaultState);
  return (
    <RegisterContext.Provider value={{ state, setState }}>
      {children}
    </RegisterContext.Provider>
  );
}
