import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRegisterForm } from "@/context/useRegisterForm";
import { useSubmitRegistration } from "@/hooks/useSubmitRegistration";
import { Loader2 } from "lucide-react";

export default function ReviewStep() {
  const { state, setState } = useRegisterForm();
  const navigate = useNavigate();
  const { submit, loading } = useSubmitRegistration();

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  const isValid = useMemo(() => {
    if (!state.team.teamName) return false;
    if (!state.team.leaderName) return false;
    if (!state.team.email) return false;
    if (!state.team.phone) return false;
    if (!state.team.institution) return false;

    if (state.members.length === 0) return false;
    if (state.members.some((m) => !m.name || !m.email)) return false;

    if (!state.project.title) return false;
    if (!state.project.focusArea) return false;
    if (!state.project.problem) return false;
    if (!state.project.solution) return false;

    if (!state.declarations.mouAgreed) return false;
    if (!state.declarations.publicityConsent) return false;

    if (!state.reviewConfirmed) return false;

    return true;
  }, [state]);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-10 relative">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
          <Loader2 className="h-16 w-16 animate-spin text-blue-600" />
        </div>
      )}

      <h1 className="text-2xl font-semibold">Review Registration</h1>

      <section className="space-y-2 border-b pb-6">
        <div className="flex justify-between items-center">
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
          <strong>Team Name:</strong> {state.team.teamName}
        </p>
        <p>
          <strong>Leader:</strong> {state.team.leaderName}
        </p>
        <p>
          <strong>Email:</strong> {state.team.email}
        </p>
        <p>
          <strong>Phone:</strong> {state.team.phone}
        </p>
        <p>
          <strong>Institution:</strong> {state.team.institution}
        </p>
      </section>

      <section className="space-y-2 border-b pb-6">
        <div className="flex justify-between items-center">
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
          <p key={i}>
            <strong>{m.name}</strong>, {m.email}
          </p>
        ))}
      </section>

      <section className="space-y-2 border-b pb-6">
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-lg">Project Overview</h2>
          <Button
            size="sm"
            variant="outline"
            onClick={() => navigate("/register/project")}
          >
            Edit
          </Button>
        </div>
        <p>
          <strong>Title:</strong> {state.project.title}
        </p>
        <p>
          <strong>Focus Area:</strong> {state.project.focusArea}
        </p>
        <p>
          <strong>Problem:</strong> {state.project.problem}
        </p>
        <p>
          <strong>Solution:</strong> {state.project.solution}
        </p>
      </section>

      <div className="flex items-start gap-3">
        <Checkbox
          checked={state.reviewConfirmed || false}
          onCheckedChange={(v) =>
            setState((s) => ({
              ...s,
              reviewConfirmed: Boolean(v),
            }))
          }
        />
        <label className="text-sm">
          I confirm all registration details are correct
        </label>
      </div>

      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          onClick={() => navigate("/register/declarations")}
        >
          Back
        </Button>
        <Button onClick={submit} disabled={!isValid || loading}>
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Registering
            </span>
          ) : (
            "Confirm Registration"
          )}
        </Button>
      </div>
    </div>
  );
}
