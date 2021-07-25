const db = require("./connection");
const { User, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  await Category.insertMany([
    { name: "Food" },
    { name: "Household Supplies" },
    { name: "Electronics" },
    { name: "Books" },
    { name: "Toys" },
  ]);

  console.log("categories seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
