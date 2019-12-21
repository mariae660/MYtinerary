const express = require("express");
const router = express.Router();
const UserEsquema = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    console.log(req.user[0]);
    const User = await UserEsquema.findById(req.user[0].id);
    res.status(200).json(User);
  }
);

router.post("/", async (req, res, next) => {
  const { Email, Password } = req.body;
  if (!Email || !Password) {
    return res.status(400).json({ msg: "Enter the Required Fields" });
  }
  const User = await UserEsquema.findOne({ Email });
  if (!User) return res.status(400).json({ msg: "User Does Not Exist" });
  const isMatch = await bcrypt.compare(Password, User.Password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid Password" });
  jwt.sign({ id: User.id }, config.get("jwtSecret"), (err, token) => {
    if (err) throw err;
    res.json({
      token,
      user: {
        name: User.FirstName + " " + User.LastName,
        email: User.Email
      }
    });
  });
});
module.exports = router;
