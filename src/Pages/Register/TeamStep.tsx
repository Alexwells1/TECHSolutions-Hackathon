import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { StepLayout } from "../../components/stepLayout";
import { useRegisterForm } from "../../context/useRegisterForm";

export default function TeamStep() {
  const { state, setState } = useRegisterForm();
  const navigate = useNavigate();

  return (
    <StepLayout
      title="Team & Primary Contact"
      onNext={() => navigate("/register/members")}
    >
      <div className="mb-4">
        <label htmlFor="teamName" className="block mb-1">
          Team Name
        </label>
        <Input
          id="teamName"
          placeholder="Team Name"
          value={state.team.teamName}
          onChange={(e) =>
            setState((s) => ({
              ...s,
              team: { ...s.team, teamName: e.target.value },
            }))
          }
        />
      </div>

      <div className="mb-4">
        <label htmlFor="leaderName" className="block mb-1">
          Team Leader Full Name
        </label>
        <Input
          id="leaderName"
          placeholder="Team Leader Full Name"
          value={state.team.leaderName}
          onChange={(e) =>
            setState((s) => ({
              ...s,
              team: { ...s.team, leaderName: e.target.value },
            }))
          }
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">
          Primary Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Primary Email"
          value={state.team.email}
          onChange={(e) =>
            setState((s) => ({
              ...s,
              team: { ...s.team, email: e.target.value },
            }))
          }
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block mb-1">
          WhatsApp Phone Number
        </label>
        <Input
          id="phone"
          placeholder="WhatsApp Phone Number"
          value={state.team.phone}
          onChange={(e) =>
            setState((s) => ({
              ...s,
              team: { ...s.team, phone: e.target.value },
            }))
          }
        />
      </div>

      <div className="mb-4">
        <label htmlFor="institution" className="block mb-1">
          Institution / Department / Level
        </label>
        <Input
          id="institution"
          placeholder="Institution / Department / Level"
          value={state.team.institution}
          onChange={(e) =>
            setState((s) => ({
              ...s,
              team: { ...s.team, institution: e.target.value },
            }))
          }
        />
      </div>
    </StepLayout>
  );
}
