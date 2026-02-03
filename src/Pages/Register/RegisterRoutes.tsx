import { Routes, Route } from "react-router-dom";
import MembersStep from "./MembersStep";
import ReviewStep from "./ReviewStep";
import TeamStep from "./TeamStep";
import ProjectStep from "./ProjectStep";
import IntellectualPropertyStep from "./IntellectualPropertyStep";
import DeclarationsStep from "./DeclarationsStep";
import RegisterLayout from "@/components/Reglayout";
import RegistrationGate from "./RegistrationGate";

export default function RegisterRoutes() {
  return (
    <Routes>
      <Route element={<RegistrationGate />}>
        <Route element={<RegisterLayout />}>
          <Route path="" element={<TeamStep />} />
          <Route path="members" element={<MembersStep />} />
          <Route path="project" element={<ProjectStep />} />
          <Route
            path="intellectual-property"
            element={<IntellectualPropertyStep />}
          />
          <Route path="declarations" element={<DeclarationsStep />} />
          <Route path="review" element={<ReviewStep />} />
        </Route>
      </Route>
    </Routes>
  );
}
