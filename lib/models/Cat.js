const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Cat = new Schema({
  url: String,
  width: Number,
  height: Number
});

module.exports = mongoose.model("Cat", Cat);
