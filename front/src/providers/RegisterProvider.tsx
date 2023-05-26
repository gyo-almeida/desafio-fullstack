import { ReactNode, createContext } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface RegisterProviderProps {
  children: ReactNode;
}

interface RegisterContextValues {
  createCount: (data: Register) => void;
}

export interface Register {
  email: string;
  name: string;
  password: string;
  cellPhone: number | string;
}

export const RegisterContext = createContext<RegisterContextValues>(
  {} as RegisterContextValues
);

export const RegisterProvider = ({ children }: RegisterProviderProps) => {
  const navigate = useNavigate();

  async function createCount(data: Register) {
    try {
      api.post("/users", data);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <RegisterContext.Provider value={{ createCount }}>
      {children}
    </RegisterContext.Provider>
  );
};
