import { gql } from "@apollo/client";

export const GET_COMPANY = gql`
  query getCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      email
      description
    }
  }
`;
