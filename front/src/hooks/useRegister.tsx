import { useContext } from "react";
import { RegisterContext } from "../providers/RegisterProvider";

export const useRegister = () => {
  const registerContext = useContext(RegisterContext);

  return registerContext;
};
