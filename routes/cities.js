const express = require("express");
const router = express.Router();

const city = require("../models/city");
router.get("/", async (req, res) => {
  const city1 = await city.find();
  res.json(city1);
});

module.exports = router;
