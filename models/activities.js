const mongoose = require("mongoose");
const { Schema } = mongoose;
const ActividadEsquema = new Schema({
  imagen: { type: String, required: true },
  name: { type: String, required: true },
  idItinerary: { type: String, required: true }
});

module.exports = mongoose.model("activities", ActividadEsquema, "activities");
