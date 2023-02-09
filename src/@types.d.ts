import { type } from "os";

export type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

// think data structure and actions:
export type AuthContextType = {
  isLoggedIn: boolean;
  username?: string;
  email?: string;
  token?: string;
  login: (username: string, email: string, token: string) => void;
  logout: () => void;
};

export type ChildProps = {
  children?: React.ReactNode;
};

export type RegisterFormType = {
  username: string;
  email: string;
  password: string;
};
