const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Blog = new Schema({
  author: String,
  courseWeek: Number,
  title: String,
  confidenceInYourContent: Number,
  content: String
});

module.exports = mongoose.model("Blog", Blog);
