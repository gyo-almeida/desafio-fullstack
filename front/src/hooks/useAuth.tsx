import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};
