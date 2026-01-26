import { useContext } from "react";
import { RegisterContext } from "./RegisterContext.1";

export function useRegisterForm() {
  const ctx = useContext(RegisterContext);
  if (!ctx) throw new Error("RegisterProvider missing");
  return ctx;
}
