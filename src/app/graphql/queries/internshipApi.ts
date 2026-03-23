import { gql } from "@apollo/client";

export const GET_MY_INTERNSHIPS = gql`
  query GetInternshipsForIntern($internId: ID!) {
    getInternshipsForIntern(internId: $internId) {
      id
      title
      typeOfEmployment
      salary
      schedule
      company
      tags
    }
  }
`;

export const GET_INTERNSHIPS_FOR_COMPANY = gql`
  query getInternshipsForCompany($id: ID!) {
    getInternshipsForCompany(id: $id) {
      id
      title
      typeOfEmployment
      salary
      schedule
      company
      companyId
      tags
    }
  }
`;

export const GET_POPULAR_INTERNSHIPS = gql`
  query GetPopularInternships {
    getPopularInternships {
      id
      title
      typeOfEmployment
      salary
      schedule
      company
      tags
    }
  }
`;

export const GET_FILTERED_INTERNSHIPS = gql`
  query GetFilteredInternships($page: Int, $limit: Int) {
    getFilteredInternships(page: $page, limit: $limit) {
      internships {
        id
        title
        company
        salary
        typeOfEmployment
        schedule
        companyId
        tags
      }
      numberOfPages
    }
  }
`;

export const GET_FAVORITES_INTERNSHIPS = gql`
  query GetFavoritesInternships($internId: ID!) {
    getFavoritesInternships(internId: $internId) {
      id
      title
      company
      schedule
      tags
    }
  }
`;

export const GET_INTERNSHIP = gql`
  query getInternship($id: ID!) {
    getInternship(id: $id) {
      id
      title
      company
      schedule
      typeOfEmployment
      durationOfInternship
      salary
      skills
      conditions
      tags
    }
  }
`;

export const CREATE_INTERNSHIP = gql`
  mutation CreateInternship(
    $title: String!
    $company: String!
    $focusOfInternship: String!
    $schedule: String!
    $typeOfEmployment: String!
    $durationOfInternship: String!
    $salary: Float
    $skills: String!
    $conditions: String!
    $companyId: ID
  ) {
    createInternship(
      title: $title
      company: $company
      focusOfInternship: $focusOfInternship
      schedule: $schedule
      typeOfEmployment: $typeOfEmployment
      durationOfInternship: $durationOfInternship
      salary: $salary
      skills: $skills
      conditions: $conditions
      companyId: $companyId
    ) {
      id
      title
      company
    }
  }
`;

export const APPLY_FOR_INTERNSHIP = gql`
  mutation ApplyForInternship($internshipId: ID!, $userId: ID!) {
    applyForInternship(internshipId: $internshipId, userId: $userId) {
      participants
    }
  }
`;
