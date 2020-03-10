const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Form = new Schema({
  title: String,
  comment: String,
  url: String,
  date: Date
});

module.exports = mongoose.model("Form", Form);
