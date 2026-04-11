import { client } from "../../../../apolloClient";
import { useUser } from "../../../../app/context/userContext/userContext";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { setUser } = useUser();
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    if (setUser) {
      setUser(null);
    }
    client.resetStore();
    nav("/");
  };

  return { logout };
};
