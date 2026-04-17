import { useMutation } from "@apollo/client";
import { client, createAuthHeaders } from "../../../../apolloClient";
import { useUser } from "../../../../app/context/userContext/userContext";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../../../../app/graphql/queries/authApi";

export const useLogout = () => {
  const { setUser } = useUser();

  const [logoutMutation] = useMutation(LOGOUT, {
    context: {
      headers: createAuthHeaders(),
    },
  });

  const nav = useNavigate();

  const logoutApps = async () => {
    const result = await logoutMutation();

    if (result.data.logout.success) {
      localStorage.removeItem("token");
      if (setUser) {
        setUser(null);
      }
      client.resetStore();
      nav("/");
    }
  };

  return { logoutApps };
};
