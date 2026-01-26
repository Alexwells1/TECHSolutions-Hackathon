import { Routes, Route } from "react-router-dom";
import MembersStep from "./MembersStep";
import ReviewStep from "./ReviewStep";
import TeamStep from "./TeamStep";
import ProjectStep from "./ProjectStep";
import IntellectualPropertyStep from "./IntellectualPropertyStep";
import DeclarationsStep from "./DeclarationsStep";

export default function RegisterRoutes() {
  return (
    <Routes>
      <Route path="team" element={<TeamStep />} />
      <Route path="members" element={<MembersStep />} />
      <Route path="project" element={<ProjectStep />} />
      <Route
        path="intellectual-property"
        element={<IntellectualPropertyStep />}
      />
      <Route path="declarations" element={<DeclarationsStep />} />
      <Route path="review" element={<ReviewStep />} />
    </Routes>
  );
}
