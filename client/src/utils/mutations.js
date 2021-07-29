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

export const UPDATE_EMAIL = gql`
  mutation updateEmail($email: String!) {
    updateEmail(email: $email) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USERNAME = gql`
  mutation updateUsername($username: String!) {
    updateUsername(username: $username) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_CITY = gql`
  mutation updateCity($city: String!) {
    updateCity(city: $city) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_COUNTRY = gql`
  mutation updateCountry($country: String!) {
    updateCountry(country: $country) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPLOAD_IMAGE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      path
      id
      filename
      mimetype
    }
  }
`;
