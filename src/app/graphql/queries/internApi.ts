import { gql } from "@apollo/client";

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
