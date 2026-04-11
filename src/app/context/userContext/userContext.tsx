import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

export interface User {
  role: string;
  id: string;
}

interface IContext {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  authLoading: boolean | null;
  setAuthLoading: Dispatch<SetStateAction<boolean | null>>;
}

export const UserContext = createContext<IContext | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }

  return context;
};
