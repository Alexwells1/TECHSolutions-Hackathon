export interface ITeamMember {
  name: string;
  email: string;
  role: "Leader" | "Member";
}

export interface IProject {
  title: string;
  focusArea: string;
}

export interface IRegistrationSummary {
  data: Data;
}

export interface IRegistrationResponse {
  success: boolean;
  data: Data[];
}


export interface Data {
  id: string;
  teamName: string;
  project: IProject;
  members: ITeamMember[];
}

export interface IRegistration extends IRegistrationSummary {
  members: ITeamMember[];
  data: Data;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export interface ApiError {
  message: string;
  status?: number;
}
