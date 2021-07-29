//Subcategory
const mongoose = require("mongoose");

const { Schema } = mongoose;

const subcategorySchema = new Schema({
  subcategoryname: {
    type: String,
    trim: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  } 
});

const Subcategory = mongoose.model("Subcategory", subcategorySchema);

module.exports = Subcategory;
