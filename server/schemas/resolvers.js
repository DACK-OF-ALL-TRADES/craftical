const { AuthenticationError } = require("apollo-server-express");
const { User, Category } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addFirstName: async (parent, { firstName }, context) => {
      if (context.user) {
        context.user.firstName = firstName;
        console.log(context.user);
        return User.findOneAndUpdate({
          _id: context.user._id,
          firstName: firstName,
        });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateLastName: async (parent, { lastName }, context) => {
      if (context.user) {
        console.log(context.user);
        return User.findOneAndUpdate({
          _id: context.user._id,
          lastName: lastName,
        });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateEmail: async (parent, { email }, context) => {
      if (context.user) {
        context.user.email = email;
        console.log(context.user);
        return User.findOneAndUpdate({
          _id: context.user._id,
          email: email,
        });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateUsername: async (parent, { username }, context) => {
      if (context.user) {
        console.log(context.user);
        return User.findOneAndUpdate({
          _id: context.user._id,
          username: username,
        });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateCity: async (parent, { city }, context) => {
      if (context.user) {
        console.log(context.user);
        return User.findOneAndUpdate({
          _id: context.user._id,
          city: city,
        });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateCountry: async (parent, { country }, context) => {
      if (context.user) {
        console.log(context.user);
        return User.findOneAndUpdate({
          _id: context.user._id,
          country: country,
        });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
