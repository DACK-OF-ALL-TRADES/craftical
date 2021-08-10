import { gql } from "@apollo/client";

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
      username
      city
      country
      profile
    }
  }
`;

export const GET_ME = gql`
  {
    me {
      _id
      firstName
      lastName
      email
      username
      city
      country
      profile
    }
  }
`;

export const GET_USER_ITEMS = gql`
  {
    item {
      _id
      name
      description
      status
      category
      subcategory
      user
    }
  }
`;
