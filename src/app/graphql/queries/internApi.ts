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
