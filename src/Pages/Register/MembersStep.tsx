import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StepLayout } from "../../components/stepLayout";
import { useRegisterForm } from "../../context/useRegisterForm";

export default function MembersStep() {
  const { state, setState } = useRegisterForm();
  const navigate = useNavigate();

  const addMember = () => {
    if (state.members.length >= 3) return;
    setState((s) => ({
      ...s,
      members: [...s.members, { name: "", email: "" }],
    }));
  };

  return (
    <StepLayout
      title="Team Members"
      onBack={() => navigate("/register/team")}
      onNext={() => navigate("/register/project")}
    >
      {state.members.map((m, i) => (
        <div key={i} className="space-y-2 mb-4">
          <div>
            <label htmlFor={`memberName${i}`} className="block mb-1">
              Full Name
            </label>
            <Input
              id={`memberName${i}`}
              placeholder="Full Name"
              value={m.name}
              onChange={(e) =>
                setState((s) => {
                  const members = [...s.members];
                  members[i].name = e.target.value;
                  return { ...s, members };
                })
              }
            />
          </div>

          <div>
            <label htmlFor={`memberEmail${i}`} className="block mb-1">
              Email
            </label>
            <Input
              id={`memberEmail${i}`}
              type="email"
              placeholder="Email"
              value={m.email}
              onChange={(e) =>
                setState((s) => {
                  const members = [...s.members];
                  members[i].email = e.target.value;
                  return { ...s, members };
                })
              }
            />
          </div>
        </div>
      ))}
      <Button
        variant="outline"
        onClick={addMember}
        disabled={state.members.length >= 3}
      >
        Add Member
      </Button>
    </StepLayout>
  );
}
