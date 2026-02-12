import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Success() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { message?: string; success?: boolean };
  const { message, success } = state || {};

  useEffect(() => {
    if (!message) {
      navigate("/register", { replace: true });
    }
  }, [message, navigate]);

  if (!message) return null;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6 text-center">
      {success ? (
        <>
          <h1 className="text-3xl font-bold text-green-600">
            Team Registration Submitted
          </h1>

          <p className="text-gray-700 max-w-md">{message}</p>

          <p className="text-gray-600 max-w-md text-sm">
            Check your email for further instructions. Follow the steps provided
            to continue your registration process.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-red-600">
            Registration Unsuccessful
          </h1>

          <p className="text-gray-700 max-w-md">{message}</p>

          <p className="text-gray-600 max-w-md text-sm">
            If the issue persists, check your details and try again.
          </p>
        </>
      )}

      <Button size="lg" onClick={() => navigate("/")}>
        Go to Home
      </Button>
    </div>
  );
}
