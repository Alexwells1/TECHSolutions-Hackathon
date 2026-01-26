import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useRegisterForm } from "../../context/useRegisterForm";
import { StepLayout } from "../../components/stepLayout";

export default function IntellectualPropertyStep() {
  const { state, setState } = useRegisterForm();
  const navigate = useNavigate();
  const ip = state.declarations;

  return (
    <StepLayout
      title="Intellectual Property & Exclusivity"
      onBack={() => navigate("/register/project")}
      onNext={() => navigate("/register/declarations")}
    >
      {/* MOU Info */}
      <p className="text-sm mb-2">
        Have you read the FUNAAB TECHSolutions 2026 MOU and do all team members
        agree to its terms?
      </p>
      <p className="text-sm mb-4">
        I confirm that all team members have read, understood, and agree to the
        MOU, including the exclusivity clause.
      </p>
      <div className="flex items-center gap-2 mb-4">
        <Checkbox
          checked={ip.mouAgreed}
          onCheckedChange={(v) =>
            setState((s) => ({
              ...s,
              declarations: { ...s.declarations, mouAgreed: Boolean(v) },
            }))
          }
        />
        <label className="text-sm">Agree</label>
      </div>

      {/* Digital Signature */}
      <div className="flex flex-col mb-4">
        <label htmlFor="signature" className="text-sm font-medium">
          Digital Signature (type full name of team leader to confirm
          acceptance)
        </label>
        <Input
          id="signature"
          placeholder="Team Leader Full Name"
          value={ip.signature}
          onChange={(e) =>
            setState((s) => ({
              ...s,
              declarations: { ...s.declarations, signature: e.target.value },
            }))
          }
          className="mt-1"
        />
      </div>

      {/* Date of submission */}
      <div className="flex flex-col mb-4">
        <label htmlFor="date" className="text-sm font-medium">
          Date of Submission
        </label>
        <Input
          id="date"
          type="date"
          placeholder="YYYY-MM-DD"
          value={ip.date || ""}
          onChange={(e) =>
            setState((s) => ({
              ...s,
              declarations: { ...s.declarations, date: e.target.value },
            }))
          }
          className="mt-1"
        />
      </div>

      {/* Open MOU Link */}
      <p className="text-sm mt-2">
        <a href="/mou.pdf" target="_blank" className="underline text-blue-600">
          Open MOU
        </a>
      </p>
    </StepLayout>
  );
}
