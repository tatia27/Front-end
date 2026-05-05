import { useState, type ReactNode } from "react";
import { UserContext, type User } from "./userContext";

interface Props {
  children: ReactNode;
}

export function UserContextProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
