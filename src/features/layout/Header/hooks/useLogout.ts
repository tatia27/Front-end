import { useContext } from "react";
import { UserContext } from "../../../../app/context/userContext/userContext";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { setUser } = useContext(UserContext);
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    if (setUser) {
      setUser(null);
    }
    nav("/");
  };

  return { logout };
};
