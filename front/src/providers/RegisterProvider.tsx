import { ReactNode, createContext } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
    console.log(data)
    try {
      const response = await api.post("/users", data);

      if (response.status === 201) {
        toast.success(`Cadastro realizado com sucesso`, {
          style: {
            border: "1px solid #27AE60",
            padding: "16px",
            color: "#27AE60",
            background: "#F5F5F5",
          },
          iconTheme: {
            primary: "#27AE60",
            secondary: "#F5F5F5",
          },
        });

        navigate("/");
      }
    } catch (error) {
      toast.error(`Falha no cadastro`, {
        style: {
          border: "1px solid #EB5757",
          padding: "16px",
          color: "#EB5757",
          background: "#F5F5F5",
        },
        iconTheme: {
          primary: "#EB5757",
          secondary: "#F5F5F5",
        },
      });
    }
  }

  return (
    <RegisterContext.Provider value={{ createCount }}>
      {children}
    </RegisterContext.Provider>
  );
};
