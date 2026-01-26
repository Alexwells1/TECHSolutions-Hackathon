import { Routes, Route, Navigate } from "react-router-dom";
import { RegisterProvider } from "@/context/RegisterContext";
import RegisterRoutes from "./Pages/Register/RegisterRoutes";
import Success from "./Pages/Register/Success";
import { Toaster } from "sonner";
import Home from "./Pages/Home";


export default function App() {
  return (
    <>
      <RegisterProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register/*" element={<RegisterRoutes />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </RegisterProvider>
      <Toaster position="top-right" />
    </>
  );
}
