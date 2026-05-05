import { createContext, type Dispatch, type SetStateAction } from "react";

export interface User {
  role: string;
  id: string;
}

interface IContext {
  user?: User | null;
  setUser?: Dispatch<SetStateAction<User | null>>;
  authLoading?: boolean;
  setAuthLoading?: Dispatch<SetStateAction<boolean | null>>;
}

export const UserContext = createContext<IContext>({});
