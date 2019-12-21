const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const UserEsquema = require("../models/user");
router.post("/", async (req, res) => {
  const {
    FirstName,
    Email,
    Password,
    LastName,
    Country,
    ProfilePic
  } = req.body;

  if (!FirstName || !Email || !Password || !Country || !LastName) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  UserEsquema.findOne({ Email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exists" });
    const newUser = new UserEsquema({
      ProfilePic,
      FirstName,
      Email,
      Password,
      LastName,
      Country
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.Password, salt, (err, hash) => {
        if (err) throw err;
        newUser.Password = hash;
        newUser.save().then(user => {
          jwt.sign({ id: user.id }, config.get("jwtSecret"), (err, token) => {
            if (err) throw err;

            res.json({
              token,
              user: {
                FirstName: user.FirstName,
                Email: user.Email,
                Password: user.Password,
                LastName: user.LastName,
                Country: user.Country,
                ProfilePic: user.ProfilePic
              }
            });
          });
        });
      });
    });
  });
});

module.exports = router;
