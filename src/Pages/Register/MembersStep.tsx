import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StepLayout } from "../../components/stepLayout";
import { useRegisterForm } from "../../context/useRegisterForm";
import { toast } from "sonner"; // direct import

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

  const disableNext =
    state.members.length < 3 || state.members.some((m) => !m.name || !m.email);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleNext = () => {
    for (let i = 0; i < state.members.length; i++) {
      const member = state.members[i];
      if (!member.name) {
        toast.error(`Member ${i + 1} name is required.`);
        return;
      }
      if (!member.email || !isValidEmail(member.email)) {
        toast.error(`Member ${i + 1} has an invalid email.`);
        return;
      }
    }

    if (state.members.length < 3) {
      toast.error("You need at least 3 members.");
      return;
    }

    navigate("/register/project");
  };

  return (
    <StepLayout
      title="Team Members"
      onBack={() => navigate("/register")}
      onNext={handleNext}
      disableNext={disableNext}
      warnOnReload
    >

      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <h3 className="font-medium mb-2">Team Leader</h3>
        <label
          htmlFor="teamLeader"
          className="block mb-1 text-sm text-gray-700"
        >
          Name
        </label>
        <Input
          id="teamLeader"
          placeholder="Team Leader Name"
          value={state.team.leaderName}
          readOnly
        />
      </div>

      {state.members.map((m, i) => (
        <div
          key={i}
          className="mb-6 p-4 border rounded-md bg-white shadow-sm relative"
        >

          <Button
            size="sm"
            variant="ghost"
            className="absolute top-2 right-2 text-red-500 font-bold"
            onClick={() =>
              setState((s) => {
                const members = [...s.members];
                members.splice(i, 1);
                return { ...s, members };
              })
            }
          >
            –
          </Button>

          <h3 className="font-medium mb-2">Member {i + 1}</h3>

          <div className="mb-3">
            <label
              htmlFor={`memberName${i}`}
              className="block mb-1 text-sm text-gray-700"
            >
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
            <label
              htmlFor={`memberEmail${i}`}
              className="block mb-1 text-sm text-gray-700"
            >
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
