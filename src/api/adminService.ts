import type {
  LoginCredentials,
  LoginResponse,
  IRegistration,
  IRegistrationResponse,
} from "../types/registration";
import { api } from "./api";



// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});



// Login API
export const login = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(
    "/admin/auth/login",
    credentials
  );
  return response.data;
};

// Get all registrations
export const getRegistrations = async (): Promise<IRegistrationResponse > => {
  const response = await api.get<IRegistrationResponse>(
    "/admin/registrations"
  );
  return response.data;
};

// Get single registration by ID
export const getRegistration = async (id: string): Promise<IRegistration> => {
  const response = await api.get<IRegistration>(`/admin/registrations/${id}`);
  return response.data;
};

export default api;
