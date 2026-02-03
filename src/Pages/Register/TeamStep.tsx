import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { StepLayout } from "../../components/stepLayout";
import { useRegisterForm } from "../../context/useRegisterForm";
import { toast } from "sonner";

export default function TeamStep() {
  const { state, setState } = useRegisterForm();
  const navigate = useNavigate();

  const disableNext =
    !state.team.teamName ||
    !state.team.leaderName ||
    !state.team.email ||
    !state.team.phone;

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPhone = (phone: string) => /^\d{10,15}$/.test(phone);

  const handleNext = () => {
    if (!state.team.email || !isValidEmail(state.team.email)) {
      toast.error("Invalid email. Please enter a valid email address.");
      return;
    }

    if (!state.team.phone || !isValidPhone(state.team.phone)) {
      toast.error("Invalid phone number.");
      return;
    }

    navigate("/register/members");
  };

  return (
    <StepLayout
      title="Team & Primary Contact"
      onNext={handleNext}
      disableNext={disableNext}
      warnOnReload
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
          Institution
        </label>
        <Input
          id="institution"
          placeholder="Institution / Department / Level"
          value={state.team.institution}
          readOnly
        />
      </div>
    </StepLayout>
  );
}
