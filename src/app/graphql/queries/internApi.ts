import { gql } from "@apollo/client";

export const GET_INTERNS = gql`
  query interns {
    interns {
      id
      firstName
      middleName
      lastName
    }
  }
`;

export const GET_INTERN = gql`
  query getIntern($id: ID!) {
    getIntern(id: $id) {
      id
      firstName
      middleName
      lastName
      email
      favorites
      cv {
        age
        location
        levelOfEducation
        educationalInstitution
        specialization
        hardSkills
        softSkills
      }
    }
  }
`;

export const GET_PARTICIPANTS_OF_INTERNSHIP = gql`
  query participantsOfInternship($id: ID!) {
    participantsOfInternship(id: $id)
  }
`;

export const DELETE_INTERN = gql`
  mutation ($id: ID!) {
    deleteIntern(id: $id) {
      id
      firstName
    }
  }
`;

export const CREATE_INTERN = gql`
  mutation createIntern(
    $firstName: String!
    $middleName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $description: String
  ) {
    createIntern(
      firstName: $firstName
      middleName: $middleName
      lastName: $lastName
      email: $email
      password: $password
      description: $description
    ) {
      id
      firstName
      email
      role
    }
  }
`;

export const UPDATE_INTERN = gql`
  mutation updateIntern($id: ID!, $input: UpdateInternInput) {
    updateIntern(id: $id, input: $input) {
      id
      firstName
      middleName
      lastName
      email
      role
      description
      favorites
      cv {
        age
        location
        levelOfEducation
        educationalInstitution
        specialization
        hardSkills
        softSkills
      }
    }
  }
`;
