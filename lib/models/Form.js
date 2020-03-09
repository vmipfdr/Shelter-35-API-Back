const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Post = new Schema({
  name: String,
  alpha2Code: String,
  alpha3Code: String,
  callingCodes: [String],
  capital: String,
  region: String,
  subregion: String,
  population: Number,
  timezones: [String],
  borders: [String]
  //add array of deals IDs (think harry potter)
});

module.exports = mongoose.model("Post", Post);
