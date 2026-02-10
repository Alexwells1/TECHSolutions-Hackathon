import type { RegisterState } from "./RegisterContext";

export const defaultState: RegisterState = {
  reviewConfirmed: false,
  team: {
    teamName: "",
    leaderName: "",
    email: "",
    phone: "",
    institution: "Federal University of Agriculture, Abeokuta (FUNAAB)",
  },
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
};
