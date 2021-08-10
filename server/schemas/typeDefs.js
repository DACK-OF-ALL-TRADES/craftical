const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    username: String
    city: String
    country: String
    profile: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    subcategory: [Subcategory]
    getcategory(name: String): Category
    getsubcategory(subcategoryname: String): Subcategory
    getuser(lastName: String): User
    getitem(itemid: ID!): Item
    item: [Item]
    user: User
    me: User
    files: String
  }

  type Category {
    _id: ID
    name: String
  }

  type Subcategory {
    _id: ID
    subcategoryname: String
    category: Category
  }

  type Item {
    _id: ID
    name: String
    description: String
    status: String
    category: String
    subcategory: String
    user: String
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addItem(
      name: String!
      description: String!
      status: String!
      category: String!
      subcategory: String!
    ): Auth
    login(email: String!, password: String!): Auth
    addFirstName(firstName: String!): Auth
    updateLastName(lastName: String!): Auth
    updateEmail(email: String!): Auth
    updateUsername(username: String!): Auth
    updateCity(city: String!): Auth
    updateCountry(country: String!): Auth
    uploadFile(file: Upload!): Boolean
  }
`;

module.exports = typeDefs;
