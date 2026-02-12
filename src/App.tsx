import { Routes, Route, Navigate } from "react-router-dom";
import { RegisterProvider } from "@/context/RegisterContext";
import RegisterRoutes from "./Pages/Register/RegisterRoutes";
import Success from "./Pages/Register/Success";
import { Toaster } from "sonner";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import { Login } from "./Pages/admin/Login";
import { Dashboard } from "./Pages/admin/Dashboard";
import { RegistrationDetails } from "./Pages/admin/RegistrationDetails";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};


const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default function App() {
  return (
    <>
      <RegisterProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register/*" element={<RegisterRoutes />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/admin/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/registrations/:id"
            element={
              <ProtectedRoute>
                <RegistrationDetails />
              </ProtectedRoute>
            }
          />
        </Routes>
      </RegisterProvider>
      <Toaster position="top-right" />
    </>
  );
}
