const mongoose = require("mongoose");
const config = require("config");
const url = config.get("mongoURI");
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(db => console.log("It´s ready"));

module.exports = mongoose;
