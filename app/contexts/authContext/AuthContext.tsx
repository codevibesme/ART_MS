"use client";
import { User } from "@/app/types/types";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
interface AuthContextProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({});
  const contextValue = useMemo(() => {
    return { user, setUser };
  }, [user, setUser]);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export const useAuthContext = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuthContext must be used within an AuthProvider");
  else return context;
};
export default AuthProvider;
