import { getRegistration } from '@/api/adminService';
import { handleApiError } from '@/api/api';
import type { IRegistration, ApiError } from '@/types/registration';
import { useState, useEffect } from 'react';


export const useRegistration = (id: string) => {
  const [registration, setRegistration] = useState<IRegistration | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchRegistration = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getRegistration(id);
      setRegistration(data);
      console.log("Registration koko:", data);
    } catch (err) {
      const apiError = handleApiError(err);
      setError(apiError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchRegistration();
    }
  }, [id]);

  return { registration, loading, error, refetch: fetchRegistration };
};
