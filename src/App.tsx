import { Routes, Route } from "react-router-dom";
import { RegisterProvider } from "@/context/RegisterContext";
import RegisterRoutes from "./Pages/Register/RegisterRoutes";
import Success from "./Pages/Register/Success";
import { Toaster } from "sonner";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import AdminPage from "./Pages/admin/AdminPage";
import TeamDetailPage from "./Pages/admin/Team";


export default function App() {
  return (
    <>
      <RegisterProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register/*" element={<RegisterRoutes />} />
          <Route path="/success" element={<Success />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/team/:id" element={<TeamDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RegisterProvider>
      <Toaster position="top-right" />
    </>
  );
}
