const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const UserSchema = require("../models/user");
const config = require("config");
const passport = require("passport");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.get("jwtSecret");

module.exports = function(passport) {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      if (!jwt_payload.GoogleId) {
        const User = await UserSchema.findById(jwt_payload.id);
        console.log(User);
        if (User) return done(null, User);
        return done(null, false);
      } else {
        const User = await UserSchema.find({ GoogleId: jwt_payload.GoogleId });
        if (User) return done(null, User);
        return done(null, false);
      }
    })
  );
};
