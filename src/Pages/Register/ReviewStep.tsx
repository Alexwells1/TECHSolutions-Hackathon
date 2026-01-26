import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRegisterForm } from "@/context/useRegisterForm";
import { useSubmitRegistration } from "@/hooks/useSubmitRegistration";

export default function ReviewStep() {
  const { state, setState } = useRegisterForm();
  const navigate = useNavigate();
  const { submit, loading } = useSubmitRegistration();

  // Lock scroll when loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-10 relative">
      {/* Full-page loading overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
          <div className="loadership_NRCEJ">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}

      <h1 className="text-2xl font-semibold">Review Submission</h1>

      {/* Team Info */}
      <section className="space-y-2 border-b pb-6">
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-lg">Team Information</h2>
          <Button
            size="sm"
            variant="outline"
            onClick={() => navigate("/register/team")}
          >
            Edit
          </Button>
        </div>
        <p>
          <span className="font-medium">Team Name:</span> {state.team.teamName}
        </p>
        <p>
          <span className="font-medium">Leader:</span> {state.team.leaderName}
        </p>
        <p>
          <span className="font-medium">Email:</span> {state.team.email}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {state.team.phone}
        </p>
        <p>
          <span className="font-medium">Institution / Dept / Level:</span>{" "}
          {state.team.institution}
        </p>
      </section>

      {/* Team Members */}
      <section className="space-y-2 border-b pb-6">
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-lg">Team Members</h2>
          <Button
            size="sm"
            variant="outline"
            onClick={() => navigate("/register/members")}
          >
            Edit
          </Button>
        </div>
        {state.members.map((m, i) => (
          <div key={i} className="mb-2">
            <p>
              <span className="font-medium">Full Name:</span> {m.name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {m.email}
            </p>
          </div>
        ))}
      </section>

      {/* Project */}
      <section className="space-y-2 border-b pb-6">
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-lg">Project</h2>
          <Button
            size="sm"
            variant="outline"
            onClick={() => navigate("/register/project")}
          >
            Edit
          </Button>
        </div>
        <p>
          <span className="font-medium">Title:</span> {state.project.title}
        </p>
        <p>
          <span className="font-medium">Focus Area:</span>{" "}
          {state.project.focusArea}
        </p>
        <p>
          <span className="font-medium">Problem Statement:</span>{" "}
          {state.project.problem}
        </p>
        <p>
          <span className="font-medium">Solution Summary:</span>{" "}
          {state.project.solution}
        </p>
        <p>
          <span className="font-medium">Technologies:</span>{" "}
          {state.project.technologies}
        </p>
        <p>
          <span className="font-medium">Expected MVP Features:</span>
        </p>
        <ul className="list-disc list-inside ml-4">
          {state.project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>

      {/* Declarations & Permissions */}
      <section className="space-y-2 border-b pb-6">
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-lg">Declarations & Permissions</h2>
          <Button
            size="sm"
            variant="outline"
            onClick={() => navigate("/register/declarations")}
          >
            Edit
          </Button>
        </div>
        <p>
          <span className="font-medium">MOU Agreed:</span>{" "}
          {state.declarations.mouAgreed ? "Yes" : "No"}
        </p>
        <p>
          <span className="font-medium">Publicity Consent:</span>{" "}
          {state.declarations.publicityConsent ? "Yes" : "No"}
        </p>
        <p>
          <span className="font-medium">Conflict of Interest:</span>{" "}
          {state.declarations.conflict || "None"}
        </p>
      </section>

      {/* Final Confirmation Checkbox */}
      <div className="flex items-start gap-3">
        <Checkbox
          checked={state.declarations.reviewConfirmed || false}
          onCheckedChange={(v) =>
            setState((s) => ({
              ...s,
              declarations: { ...s.declarations, reviewConfirmed: Boolean(v) },
            }))
          }
        />
        <label className="text-sm">
          I have reviewed all information and confirm everything is correct
        </label>
      </div>

      {/* Submit Buttons */}
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          onClick={() => navigate("/register/declarations")}
        >
          Back
        </Button>
        <Button
          onClick={submit}
          disabled={loading || !state.declarations.reviewConfirmed}
        >
          {loading ? "Submitting..." : "Confirm & Submit"}
        </Button>
      </div>
    </div>
  );
}
