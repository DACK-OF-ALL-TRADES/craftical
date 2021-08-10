//Item
const mongoose = require("mongoose");

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    ref: "Category",
  },
  subcategory: {
    type: String,
    ref: "Subcategory",
  },
  user: {
    type: String,
    ref: "User",
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
