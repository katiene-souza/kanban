import { createContext, useContext, useEffect, useState } from "react";
import { AuthType } from "../types/authType";
import { api } from "../services/api";
import { childrenType } from "../types/childrenType";

const AuthContext = createContext<AuthType>({} as AuthType);

export const AuthProvider = ({ children }: childrenType) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const localToken = localStorage.getItem("token");

    if (localToken) {
      setToken(localToken);
      api.defaults.headers.common.Authorization = `${token}`;
    }
  }, [token]);

  const signIn = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    api.defaults.headers.common.Authorization = `${newToken}`;
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    api.defaults.headers.common.Authorization;
  };

  return (
    <AuthContext.Provider value={{ token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export default useAuth;
