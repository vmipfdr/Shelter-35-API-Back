const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Form = new Schema({
  postTitle: String,
  postComment: String,
  randomCatImg: String,
  postDate: Date
});

module.exports = mongoose.model("Form", Form);
