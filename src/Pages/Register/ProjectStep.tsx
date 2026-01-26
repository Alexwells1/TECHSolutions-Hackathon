import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StepLayout } from "@/components/stepLayout";
import { useRegisterForm } from "@/context/useRegisterForm";
import { Button } from "@/components/ui/button";

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

  return (
    <StepLayout
      title="Project Summary"
      onBack={() => navigate("/register/members")}
      onNext={() => navigate("/register/intellectual-property")}
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
          value={state.project.focusArea}
          onValueChange={(v) => setProject("focusArea", v)}
          aria-label="Focus Area"
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
      </div>

      <div className="mb-4">
        <label htmlFor="problemStatement" className="block mb-1">
          Problem Statement (max 200 words)
        </label>
        <Textarea
          id="problemStatement"
          placeholder="Problem Statement (max 200 words)"
          value={state.project.problem}
          onChange={(e) => setProject("problem", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="solutionSummary" className="block mb-1">
          Solution Summary (max 300 words)
        </label>
        <Textarea
          id="solutionSummary"
          placeholder="Solution Summary (max 300 words)"
          value={state.project.solution}
          onChange={(e) => setProject("solution", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="technologies" className="block mb-1">
          Main Technologies or Tools
        </label>
        <Input
          id="technologies"
          placeholder="Main technologies or tools you will use (e.g., React, Flutter, Python, IoT)"
          value={state.project.technologies}
          onChange={(e) => setProject("technologies", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">
          Expected Minimum Viable Features (max 10 items)
        </label>

        {/* Current input for new feature */}
        <div className="flex gap-2 mb-2">
          <Input
            placeholder="Add a feature"
            value={state.project.newFeature || ""}
            onChange={(e) =>
              setState((s) => ({
                ...s,
                project: { ...s.project, newFeature: e.target.value },
              }))
            }
          />
          <Button
            type="button"
            onClick={() =>
              setState((s) => {
                if (!s.project.newFeature) return s;
                if (s.project.features.length >= 10) return s;
                return {
                  ...s,
                  project: {
                    ...s.project,
                    features: [...s.project.features, s.project.newFeature],
                    newFeature: "",
                  },
                };
              })
            }
          >
            Add
          </Button>
        </div>

        {/* Display list of added features */}
        <ul className="list-disc pl-5">
          {state.project.features.map((f, i) => (
            <li key={i} className="flex justify-between items-center">
              {f}
              <Button
                type="button"
                variant="link"
                onClick={() =>
                  setState((s) => ({
                    ...s,
                    project: {
                      ...s.project,
                      features: s.project.features.filter(
                        (_, idx) => idx !== i
                      ),
                    },
                  }))
                }
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </StepLayout>
  );
}
