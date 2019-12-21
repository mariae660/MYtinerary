const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const UserEsquema = require("./models/user");
const config = require("config");
const passport = require("passport");

const props = {};
props.clientID = config.get("client_id");
props.clientSecret = config.get("client_secret");
props.callbackURL = "http://localhost:5000/api/auth/google/callback";
props.proxy = true;
props.passReqToCallback = true;

async function findOrCreate(profile) {
  const { sub, given_name, family_name, picture, email } = profile._json;
  const UserExist = await UserEsquema.findOne({ Email: email });
  if (UserExist) {
    return UserExist;
  }
  try {
    const newUserWithGoogle = await UserEsquema.create({
      GoogleId: sub,
      Email: email,
      FirstName: given_name,
      LastName: family_name,
      ProfilePic: picture,
      Password: sub
    });
    return newUserWithGoogle;
  } catch (err) {
    return err;
  }
}
passport.use(
  new GoogleStrategy(
    {
      clientID: config.get("client_id"),
      clientSecret: config.get("client_secret"),
      callbackURL: "http://localhost:5000/api/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const User = await findOrCreate(profile);
        return done(null, User);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);
