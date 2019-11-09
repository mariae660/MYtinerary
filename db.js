const mongoose = require("mongoose");
const url =
  "mongodb+srv://mariaelena:23857774@cluster0-iskdx.mongodb.net/Myitinerary?retryWrites=true&w=majority";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(db => console.log("It´s ready"));

module.exports = mongoose;
