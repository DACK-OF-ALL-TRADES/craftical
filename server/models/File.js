const mongoose = require("mongoose");

const { Schema } = mongoose;

const fileSchema = new Schema({
  filename: String,
  mimetype: String,
  path: String,
});

const File = mongoose.model("File", fileSchema);

module.exports = File;
