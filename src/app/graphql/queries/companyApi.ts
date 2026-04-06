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

export const GET_COMPANIES = gql`
  query companies {
    companies {
      id
      name
    }
  }
`;

export const UPDATE_COMPANY = gql`
  mutation updateCompany(
    $id: ID!
    $name: String
    $description: String
    $photo: String
  ) {
    updateCompany(
      name: $name
      description: $description
      id: $id
      photo: $photo
    ) {
      id
      name
      description
    }
  }
`;

export const DELETE_COMPANY = gql`
  mutation ($id: ID!) {
    deleteCompany(id: $id) {
      id
      name
    }
  }
`;
