import { useState } from "react";
import { useRegisterForm } from "@/context/useRegisterForm";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { submitRegistration } from "@/api/registerService";

export function useSubmitRegistration() {
  const { state, setState } = useRegisterForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Utility to create a delay
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const submit = async () => {
    setLoading(true);

    try {
      const payload = {
        teamName: state.team.teamName,
        institution: state.team.institution,
        teamLeaderName: state.team.leaderName,
        teamLeaderEmail: state.team.email,
        members: state.members,
        project: state.project,
        declarations: state.declarations,
      };

      // Run both the API call and 4-second delay in parallel
      const [res] = await Promise.all([
        submitRegistration(payload),
        delay(4000),
      ]);
      const backendMessage = res?.message;
      console.log("Backend message:", backendMessage);
      if (backendMessage === "Registration successful") {
        toast.success(backendMessage);

        // Reset form state manually
        setState({
          team: {
            teamName: "",
            leaderName: "",
            email: "",
            phone: "",
            institution: "",
          },
          reviewConfirmed: false,
          members: [{ name: "", email: "" }],
          project: {
            title: "",
            focusArea: "",
            problem: "",
            solution: "",
            technologies: "",
            features: [],
            newFeature: "",
          },
          declarations: { 
            eligibilityConfirmed: false,
            mouAgreed: false,
            signature: "",
            publicityConsent: false,
            conflict: "none",
          },
        });

        navigate("/success", {
          state: {
            message: backendMessage,
            success: true,
            registrationId: res?.registrationId,
          },
        });
      } else {
        toast.error(backendMessage || "Failed to submit registration");
        navigate("/success", {
          state: {
            message: backendMessage || "Failed to submit registration",
            success: false,
          },
        });
      }
    } catch (err: any) {
      console.error(err);
      const errorMessage = err?.response?.data?.message || "Server error";
      toast.error(errorMessage);
      navigate("/success", {
        state: { message: errorMessage, success: false },
      });
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading };
}
