
import { login } from '@/api/adminService';
import { handleApiError } from '@/api/api';
import type { LoginCredentials } from '@/types/registration';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'sonner';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState<Partial<LoginCredentials>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginCredentials> = {};

    if (!credentials.username) {
      newErrors.username = 'username is required';
    }

    if (!credentials.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when username starts typing
    if (errors[name as keyof LoginCredentials]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await login(credentials);
      localStorage.setItem('token', response.token);
      toast.success('Login successful');
      navigate('/admin/dashboard');
    } catch (err) {
      const error = handleApiError(err);
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted-bg">
      <div className="w-full max-w-md p-8 bg-white rounded">
        <h1 className="text-2xl font-bold text-center mb-6">Admin Dashboard</h1>
        <p className="text-muted text-center mb-8">Sign in to access the dashboard</p>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-muted-dark mb-2">
             username
            </label>
            <input
              type="username"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.username ? 'border-danger' : 'border-muted-light'
              }`}
              aria-invalid={!!errors.username}
              aria-describedby={errors.username ? 'username-error' : undefined}
              disabled={isSubmitting}
            />
           
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-muted-dark mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.password ? 'border-danger' : 'border-muted-light'
              }`}
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? 'password-error' : undefined}
              disabled={isSubmitting}
            />
            {errors.password && (
              <p id="password-error" className="mt-1 text-sm text-danger" role="alert">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 bg-primary text-white rounded font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Sign in to dashboard"
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};
