import { createContext, useContext, useState, type ReactNode } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextValue = {
  token: string;
  user: User;
  login: (token: string, user: User) => void;
  logout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const emptyUser: User = {
  id: "",
  name: "",
  email: "",
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>(emptyUser);
  const [token, setToken] = useState("testing");

  const login = (nextToken: string, nextUser: User) => {
    setToken(nextToken);
    setUser(nextUser);
  };

  const logout = () => {
    setUser(emptyUser);
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export default AuthProvider;
