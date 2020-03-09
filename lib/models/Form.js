const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Post = new Schema({
  title: String,
  comment: String,
  url: String,
  date: Date
});

module.exports = mongoose.model("Post", Post);
