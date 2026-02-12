// src/api/api.ts
import type { ApiError } from "@/types/registration";
import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});


export const handleApiError = (error: unknown): ApiError => {
  if (error instanceof AxiosError) {
    return {
      message:
        error.response?.data?.message || error.message || "An error occurred",
      status: error.response?.status,
    };
  }
  return {
    message: "An unexpected error occurred",
  };
};
