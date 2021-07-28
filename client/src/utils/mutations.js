import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_FIRSTNAME = gql`
  mutation addFirstName($firstName: String!) {
    addFirstName(firstName: $firstName) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_LASTNAME = gql`
  mutation updateLastName($lastName: String!) {
    updateLastName(lastName: $lastName) {
      token
      user {
        _id
      }
    }
  }
`;

// Mutation {
//   addSchool(name: String!, location: String!, studentCount: Int!): School
//   # Define the required parameters for updating a class
//   updateClass(id: ID!, building: String!): Class
// }
