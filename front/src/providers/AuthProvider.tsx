import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void;
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  loading: boolean;
}

export interface User {
  id: string;
  name: string;
  cellPhone: string;
  createdAt: string;
  email: string;
  password: string;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("contactsList:@TOKEN");

    if (!token) {
      setLoading(false);

      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(false);
    setUser(user);
  }, [user]);

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);

      const { token, user } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("contactsList:@TOKEN", token);
      localStorage.setItem("contactsList:@USER", JSON.stringify(user));

      setUser(user);

      navigate("dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
