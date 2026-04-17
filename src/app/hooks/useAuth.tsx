import { useQuery } from "@apollo/client";
import { IS_AUTH } from "../graphql/queries/authApi";
import { useUser } from "../context/userContext/userContext";
import { createAuthHeaders } from "../../apolloClient";

export const useAuth = () => {
  const { setUser, setAuthLoading } = useUser();

  const token = localStorage.getItem("token");

  useQuery(IS_AUTH, {
    skip: !token,
    context: {
      headers: createAuthHeaders(),
    },
    onCompleted: (data) => {
      if (data?.isAuth?.id) {
        setUser({
          id: data.isAuth.id,
          role: data.isAuth.role,
        });
      } else {
        setUser(null);
      }

      setAuthLoading(false);
    },
    onError: () => {
      setAuthLoading(false);
    },
  });
};
