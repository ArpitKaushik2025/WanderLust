if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Dependencies & Model Require
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user.js");

// Routes Require
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/reviews.js");
const userRouter = require("./routes/user.js");
const filtersRouter = require("./routes/filters.js");
const { error } = require("console");

// DB Connection URL
const dbURL = process.env.ATLASDB_URL;

// Connection with DB
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbURL);
}

// Using Dependencies
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

// Session Options
const store = MongoStore.create({
  mongoUrl: dbURL,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", () => {
  console.log("ERROR IN MONGO SESSION STORE", error);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

// Root Directory
app.get("/", (req, res) => {
  res.redirect("/listings");
});

// Session & Flash
app.use(session(sessionOptions));
app.use(flash());

// Passport Initialisation & Session
app.use(passport.initialize());
app.use(passport.session());

// Passport Authentication
passport.use(new localStrategy(User.authenticate()));

// Serialize & Deserialize
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Locals Middleware
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.update = req.flash("update");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// Using Routes
app.use("/listings", filtersRouter);
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);

// Page Not Found Error Middleware
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not Found!"));
});

// Error Middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  // res.status(statusCode).send(message);
  res.render("error.ejs", { message });
});

// Server Starting
app.listen(8080, () => {
  console.log("App is listening to port 8080");
});
