import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useRegisterForm } from "../../context/useRegisterForm";
import { StepLayout } from "../../components/stepLayout";

export default function DeclarationsStep() {
  const { state, setState } = useRegisterForm();
  const navigate = useNavigate();
  const d = state.declarations;

  const disableNext = !d.publicityConsent || !d.eligibilityConfirmed;

  return (
    <StepLayout
      title="Declarations & Permissions"
      onBack={() => navigate("/register/intellectual-property")}
      onNext={() => navigate("/register/review")}
      disableNext={disableNext}
      warnOnReload
    >

      <div className="flex items-start gap-3 mb-4">
        <Checkbox
          checked={d.publicityConsent}
          onCheckedChange={(v) =>
            setState((s) => ({
              ...s,
              declarations: { ...s.declarations, publicityConsent: Boolean(v) },
            }))
          }
        />
        <label className="text-sm">
          I / We grant organizers the right to use screenshots, demo videos, and
          project descriptions for publicity and educational purposes.
        </label>
      </div>

      <div className="flex items-start gap-3 mb-4">
        <Checkbox
          checked={d.eligibilityConfirmed || false}
          onCheckedChange={(v) =>
            setState((s) => ({
              ...s,
              declarations: {
                ...s.declarations,
                eligibilityConfirmed: Boolean(v),
              },
            }))
          }
        />
        <label className="text-sm">
          I / We confirm that all team members are students of The Federal
          University of Agriculture, Abeokuta (FUNAAB)
        </label>
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="conflict" className="text-sm font-medium">
          Conflict of Interest Declaration (write "None" if none)
        </label>
        <Textarea
          id="conflict"
          placeholder='Type any conflicts here or "None"'
          value={d.conflict}
          onChange={(e) =>
            setState((s) => ({
              ...s,
              declarations: { ...s.declarations, conflict: e.target.value },
            }))
          }
          className="mt-1"
        />
      </div>
    </StepLayout>
  );
}
