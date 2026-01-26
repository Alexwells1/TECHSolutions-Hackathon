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
      navigate("/register/team", { replace: true });
    }
  }, [message, navigate]);

  if (!message) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6 text-center">
      {success ? (
        <>
          <h1 className="text-3xl font-bold text-green-600">
            Registration Successful!
          </h1>
          <p className="text-gray-700 max-w-md">{message}</p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-red-600">
            Registration Failed
          </h1>
          <p className="text-gray-700 max-w-md">{message}</p>
        </>
      )}
      <Button size="lg" onClick={() => navigate("/register/team")}>
        {success ? "Register Another Team" : "Try Again"}
      </Button>
    </div>
  );
}
