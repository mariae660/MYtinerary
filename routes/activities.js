const express = require("express");
const router = express.Router();

const activities = require("../models/activities");
router.get("/:idItinerary", async (req, res) => {
  const idItinerary = req.params.idItinerary;
  const activities1 = await activities.find({ idItinerary });
  res.json(activities1);
});
router.post("/", async (req, res) => {
  const Activities = req.body;
  const newActivity = await activities.create(Activities);
  res.json(newActivity);
});

module.exports = router;
