const Listing = require("../models/listing.js");

module.exports.trending = async (req, res) => {
  const allListings = await Listing.find({ category: "Trending" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    req.flash("error", "No Listing are there in this criteria.");
    res.redirect("/listings");
  }
};

module.exports.rooms = async (req, res) => {
  const allListings = await Listing.find({ category: "Rooms" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    req.flash("error", "No Listing are there in this criteria.");
    res.redirect("/listings");
  }
};

module.exports.city = async (req, res) => {
  const allListings = await Listing.find({ category: "City" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    req.flash("error", "No Listing are there in this criteria.");
    res.redirect("/listings");
  }
};

module.exports.mountains = async (req, res) => {
  const allListings = await Listing.find({ category: "Mountains" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    req.flash("error", "No Listing are there in this criteria.");
    res.redirect("/listings");
  }
};

module.exports.castles = async (req, res) => {
  const allListings = await Listing.find({ category: "Castles" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    req.flash("error", "No Listing are there in this criteria.");
    res.redirect("/listings");
  }
};

module.exports.pools = async (req, res) => {
  const allListings = await Listing.find({ category: "Pools" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    req.flash("error", "No Listing are there in this criteria.");
    res.redirect("/listings");
  }
};

module.exports.camping = async (req, res) => {
  const allListings = await Listing.find({ category: "Camping" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    req.flash("error", "No Listing are there in this criteria.");
    res.redirect("/listings");
  }
};

module.exports.farms = async (req, res) => {
  const allListings = await Listing.find({ category: "Farms" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    req.flash("error", "No Listing are there in this criteria.");
    res.redirect("/listings");
  }
};

module.exports.beach = async (req, res) => {
  const allListings = await Listing.find({ category: "Beach" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    req.flash("error", "No Listing are there in this criteria.");
    res.redirect("/listings");
  }
};

module.exports.arctic = async (req, res) => {
  const allListings = await Listing.find({ category: "Arctic" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    req.flash("error", "No Listing are there in this criteria.");
    res.redirect("/listings");
  }
};

module.exports.boats = async (req, res) => {
  const allListings = await Listing.find({ category: "Boats" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    req.flash("error", "No Listing are there in this criteria.");
    res.redirect("/listings");
  }
};
