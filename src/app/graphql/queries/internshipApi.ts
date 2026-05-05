import { gql } from "@apollo/client";

export const GET_MY_INTERNSHIPS = gql`
  query getInternshipsForIntern($internId: ID!) {
    getInternshipsForIntern(internId: $internId) {
      id
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
    }
  }
`;
