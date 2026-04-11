// import { useQuery } from "@apollo/client";
// import { IS_AUTH } from "../graphql/queries/authApi";
// import { useContext, useEffect } from "react";
// import { UserContext } from "../context/userContext/userContext";
// import { createAuthHeaders } from "../../apolloClient";

// export const useAuth = () => {
//   const { user, setUser, setAuthLoading } = useContext(UserContext);

//   // * Api
//   const { data, refetch } = useQuery(IS_AUTH, {
//     context: {
//       headers: createAuthHeaders(),
//     },
//   });

//   // console.log(data);
//   // console.log(user);

//   useEffect(() => {
//     async function load() {
//       const token = localStorage.getItem("token");

//       if (token) {
//         const { data } = await refetch();
//         // const { role, id } = data.isAuth;

//         if (setUser && data && setAuthLoading) {
//           const { role, id } = data.isAuth;

//           const userData = {
//             role,
//             id,
//           };

//           setUser(userData);
//         }
//       }
//     }
//     load();
//   }, [data, refetch, setAuthLoading, setUser]);
// };

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
