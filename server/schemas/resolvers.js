const { AuthenticationError } = require("apollo-server-express");
const { User, Category, File } = require("../models");
const { signToken } = require("../utils/auth");
const { mkdir, createWriteStream } = require("fs");
const shortid = require("shortid");
const { GraphQLUpload } = require("apollo-server-express");

const storeUpload = async ({ stream, filename, mimetype }) => {
  const id = shortid.generate();
  const path = `images/${id}-${filename}`;

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ id, path, filename, mimetype }))
      .on("error", reject)
  );
};

const processUpload = async (upload) => {
  const { createReadStream, filename, mimetype } = await upload;
  const stream = createReadStream();
  const file = await storeUpload({ stream, filename, mimetype });
  return file;
};
//

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    categories: async () => {
      return await Category.find();
    },
    subcategory: async () => {
      return await Subcategory.find({}).populate("category");
    },
    getcategory: async (parent, { name }) => {
      return Category.findOne({ name: name });
    },
    getsubcategory: async (parent, { subcategoryname }) => {
      return Subcategory.findOne({ subcategoryname: subcategoryname });
    },
    getuser: async (parent, { lastName }) => {
      return User.findOne({ lastName: lastName });
    },
    getitem: async (parent, { itemid }) => {
      return Item.findOne({ _id: itemid });
    },
    item: async () => {
      return await Item.find({})
        .populate("category")
        .populate("subcategory")
        .populate("user");
    },
    user: async () => {
      return User.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    uploadFile: async (_, { file }) => {
      mkdir("images", { recursive: true }, (err) => {
        if (err) throw err;
      });

      const upload = await processUpload(file);
      await File.create(upload);
      return upload;
    },
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
