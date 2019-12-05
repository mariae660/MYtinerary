const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema({
  cityid: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  profilepic: {
    type: String
  },
  rating: {
    type: String
  },
  duration: {
    type: String
  },
  price: {
    type: String
  },
  hashtag: {
    type: Array
  }
});

module.exports = mongoose.model("itinerary", ItinerarySchema, "itinerary");
