import { createContext } from "react";
import type { RegisterState } from "./RegisterContext";

export const RegisterContext = createContext<{
  state: RegisterState;
  setState: React.Dispatch<React.SetStateAction<RegisterState>>;
} | null>(null);
