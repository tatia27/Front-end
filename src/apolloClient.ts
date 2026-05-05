import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:8000/graphql",
});

export const createAuthHeaders = () => {
  const token = localStorage.getItem("token");

  return token
    ? {
        authorization: `Bearer ${token}`,
      }
    : {};
};

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
