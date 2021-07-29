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
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    ref: 'Subcategory',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }, 
  });

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
