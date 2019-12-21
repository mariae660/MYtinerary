const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const config = require("config");
const { mongoose } = require("./db");

const cors = require("cors");
const port = process.env.PORT || 5000;
const passport = require("passport");
require("./config/passport")(passport);

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use("/api/cities", require("./routes/cities"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/itinerary", require("./routes/itinerary"));
app.use("/api/activities", require("./routes/activities"));
app.use("/api/users", require("./routes/users"));
app.use("/api/login", require("./routes/auth"));
app.use("/api/auth/google", require("./routes/google"));
app.use(express.static(path.join(__dirname, "cliente", "public")));
app.listen(port);
console.log("Port1:" + port);
