const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserEsquema = new Schema({
  FirstName: { type: String },
  LastName: { type: String },
  Email: { type: String, required: true, unique: true },
  ProfilePic: { type: String },
  Country: { type: String },
  Password: { type: String, required: true },
  GoogleId: { type: String }
});

module.exports = User = mongoose.model("User", UserEsquema);
