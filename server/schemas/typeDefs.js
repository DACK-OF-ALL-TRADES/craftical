const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: String
    user: User
    me: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    addFirstName(firstName: String!): Auth
    updateLastName(lastName: String!): Auth
  }
`;

module.exports = typeDefs;
