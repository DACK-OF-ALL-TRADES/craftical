const db = require("./connection");
const { User, Category, Subcategory, Item } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();
  //Insert Categories
  await Category.insertMany([
    { name: "Food" },
    { name: "Household Supplies" },
    { name: "Electronics" },
    { name: "Books" },
    { name: "Toys" },
  ]);

  console.log("categories seeded");

  await Subcategory.deleteMany();

  //Insert Subcategories
  await Subcategory.insertMany([
    { subcategoryname: "Meat" },
    { subcategoryname: "Dry Goods" },
    { subcategoryname: "Vegetables" },
    { subcategoryname: "Dairy" },
  ]);

  //Insert Items
  await Item.insertMany([
    {
      name: "User1Project1",
      description: "User1 Project 1 Desc",
      status: "Finished",
      category: "6100b0f554bb8027c4be762f",
      subcategory: "6100b0f554bb8027c4be762f",
      user: "6100b0f554bb8027c4be762f",
    },
    {
      name: "User1Project2",
      description: "User1 Project 2 Desc",
      status: "Work In Progress",
      category: "6100b0f554bb8027c4be762f",
      subcategory: "6100b0f554bb8027c4be762f",
      user: "6100b0f554bb8027c4be762f",
    },
  ]);

  console.log("Items seeded");

  await User.deleteMany();
  //Insert users
  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    username: "pwashington",
    status: "Active",
  });
  await User.create({
    firstName: "Jim",
    lastName: "Wurther",
    email: "jim@testmail.com",
    password: "password54321",
    username: "jimwurther",
    status: "Active",
  });
  await User.create({
    firstName: "Candy",
    lastName: "Jones",
    email: "cj@testmail.com",
    password: "password11111",
    username: "candyj123",
    status: "Active",
  });

  console.log("users seeded");

  process.exit();
});
