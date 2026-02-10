import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StepLayout } from "@/components/stepLayout";
import { useRegisterForm } from "@/context/useRegisterForm";

const focusAreas = [
  "Logistics & Delivery Services",
  "Urban Mobility & Navigation",
  "Education & Learning Tools",
  "Small Business Operations (IoT)",
  "Community Service Platforms (IoT)",
  "Other",
];

export default function ProjectStep() {
  const { state, setState } = useRegisterForm();
  const navigate = useNavigate();

  const setProject = (key: string, value: string) => {
    setState((s) => ({ ...s, project: { ...s.project, [key]: value } }));
  };

  const disableNext =
    !state.project.title ||
    (!state.project.focusArea && state.project.focusArea !== "Other");

  const isOther = focusAreas.includes(state.project.focusArea)
    ? state.project.focusArea === "Other"
    : true;

  return (
    <StepLayout
      title="Project Summary"
      onBack={() => navigate("/register/members")}
      onNext={() => navigate("/register/intellectual-property")}
      disableNext={disableNext}
      warnOnReload
    >
      <div className="mb-4">
        <label htmlFor="projectTitle" className="block mb-1">
          Project Title
        </label>
        <Input
          id="projectTitle"
          placeholder="Project Title"
          value={state.project.title}
          onChange={(e) => setProject("title", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Focus Area</label>
        <Select
          value={
            state.project.focusArea
              ? focusAreas.includes(state.project.focusArea)
                ? state.project.focusArea
                : "Other"
              : undefined
          }
          onValueChange={(v) => setProject("focusArea", v)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Focus Area" />
          </SelectTrigger>
          <SelectContent>
            {focusAreas.map((area) => (
              <SelectItem key={area} value={area}>
                {area}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {isOther && (
          <div className="mt-2">
            <label htmlFor="otherFocus" className="block mb-1">
              Specify Other Focus Area
            </label>
            <Input
              id="otherFocus"
              placeholder="Type your focus area here"
              value={
                state.project.focusArea !== "Other"
                  ? state.project.focusArea
                  : ""
              }
              onChange={(e) => setProject("focusArea", e.target.value)}
            />
          </div>
        )}
      </div>
    </StepLayout>
  );
}
