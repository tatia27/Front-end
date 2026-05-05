import { gql } from "@apollo/client";

export const IS_AUTH = gql`
  query IsAuth {
    isAuth {
      id
      role
      message
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      success
      token
      message
      error
    }
  }
`;
