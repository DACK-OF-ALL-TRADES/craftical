const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { existsSync, mkdirSync } = require("fs");
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");
const { graphqlUploadExpress } = require("graphql-upload");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "../images")));
app.use(graphqlUploadExpress({ maxFileSize: 1000000000, maxFiles: 10 }));

existsSync(path.join(__dirname, "../images")) ||
  mkdirSync(path.join(__dirname, "../images"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

// app.use(cors("*"));
// const dir = path.join(process.cwd(), "images");
// app.use("/images", express.static(dir));
