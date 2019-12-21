const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("config");

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/login",
    session: false
  }),
  function(req, res) {
    token = jwt.sign({ id: req.user._id }, "AlgoSecreto", {
      expiresIn: "30d"
    });
    // Successful authentication, redirect home.
    res.redirect("http://localhost:3000/verifytoken/" + token);
  }
);

module.exports = router;
