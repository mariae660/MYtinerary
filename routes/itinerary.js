const express = require("express");
const router = express.Router();

const itinerary = require("../models/itinerary");
router.get("/", async (req, res) => {
  const itinerary1 = await itinerary.find();
  res.json(itinerary1);
});
router.get("/:cityid", async (req, res) => {
  const cityid = req.params.cityid;
  const itinerary1 = await itinerary.find({ cityid });
  res.json(itinerary1);
});

module.exports = router;
