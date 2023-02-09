import { createContext, useState } from "react";
import { AuthContextType, ChildProps } from "../@types";

const initialState: AuthContextType = {
  isLoggedIn: false,
  login(username, email, token) {},
  logout() {},
};

const AuthContext = createContext<AuthContextType>(initialState);

const AuthContextProvider = ({ children }: ChildProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [token, setToken] = useState<string | undefined>(undefined);

  const login = (username: string, email: string, token: string) => {
    setIsLoggedIn(true);
    setEmail(email);
    setUsername(username);
    setToken(token);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken(undefined);
    setEmail(undefined);
    setUsername(undefined);
  };
  //what we want to expose/share with the app:
  const contextValues = { isLoggedIn, username, token, email, login, logout };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

//the provider is only used in index.tsx <Provider>
export { AuthContext, AuthContextProvider };

//used in all the app:
export default AuthContext;