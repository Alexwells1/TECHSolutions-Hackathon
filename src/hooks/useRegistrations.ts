import { getRegistrations } from "@/api/adminService";
import { handleApiError } from "@/api/api";
import type { ApiError, IRegistrationResponse } from "@/types/registration";
import { useState, useEffect } from "react";

export const useRegistrations = () => {
  const [registrations, setRegistrations] =
    useState<IRegistrationResponse | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchRegistrations = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getRegistrations();
      setRegistrations(data);
      console.log("Registrations fetched:", data);
    } catch (err) {
      const apiError = handleApiError(err);
      setError(apiError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  return { registrations, loading, error, refetch: fetchRegistrations };
};
