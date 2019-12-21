const express = require("express");
const router = express.Router();
const config = require("config");
const passport = require("passport");
const jwt = require("jsonwebtoken");

require("../passportgoogle");

router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] }),
  async (req, res, next) => {}
);
router.get(
  "/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false
  }),
  async (req, res) => {
    const { GoogleId, FirstName, LastName, Email, ProfilePic } = req.user;
    const payload = {
      GoogleId
    };
    jwt.sign(payload, config.get("jwtSecret"), (err, token) => {
      if (err) throw err;
      res.redirect(`http://localhost:3000/verifytoken/${token}`).json({
        token,
        user: {
          FirstName,
          LastName,
          Email,
          ProfilePic
        }
      });
    });
  }
);
module.exports = router;
