import { useQuery } from "@apollo/client";
import { IS_AUTH } from "../graphql/queries/authApi";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext/userContext";
import { createAuthHeaders } from "../../apolloClient";

export const useAuth = () => {
  const { user, setUser, setAuthLoading } = useContext(UserContext);

  // * Api
  const { data } = useQuery(IS_AUTH, {
    context: {
      headers: createAuthHeaders(),
    },
  });

  console.log(user);

  useEffect(() => {
    async function load() {
      const token = localStorage.getItem("token");

      if (token) {
        if (setUser && data && setAuthLoading) {
          const { role, id } = data.isAuth;

          const userData = {
            role,
            id,
          };

          setUser(userData);
        }
      }
    }
    load();
  }, [data, setAuthLoading, setUser]);
};
