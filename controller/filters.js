const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");

module.exports.trending = async (req, res) => {
  const allListings = await Listing.find({ category: "Trending" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    throw new ExpressError(204, "No Listings Exist in this Criteria");
  }
};

module.exports.rooms = async (req, res) => {
  const allListings = await Listing.find({ category: "Rooms" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    throw new ExpressError(204, "No Listings Exist in this Criteria");
  }
};

module.exports.city = async (req, res) => {
  const allListings = await Listing.find({ category: "City" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    throw new ExpressError(204, "No Listings Exist in this Criteria");
  }
};

module.exports.mountains = async (req, res) => {
  const allListings = await Listing.find({ category: "Mountains" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    throw new ExpressError(204, "No Listings Exist in this Criteria");
  }
};

module.exports.castles = async (req, res) => {
  const allListings = await Listing.find({ category: "Castles" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    throw new ExpressError(204, "No Listings Exist in this Criteria");
  }
};

module.exports.pools = async (req, res) => {
  const allListings = await Listing.find({ category: "Pools" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    throw new ExpressError(204, "No Listings Exist in this Criteria");
  }
};

module.exports.camping = async (req, res) => {
  const allListings = await Listing.find({ category: "Camping" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    throw new ExpressError(204, "No Listings Exist in this Criteria");
  }
};

module.exports.farms = async (req, res) => {
  const allListings = await Listing.find({ category: "Farms" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    throw new ExpressError(204, "No Listings Exist in this Criteria");
  }
};

module.exports.beach = async (req, res) => {
  const allListings = await Listing.find({ category: "Beach" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    throw new ExpressError(204, "No Listings Exist in this Criteria");
  }
};

module.exports.arctic = async (req, res) => {
  const allListings = await Listing.find({ category: "Arctic" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    throw new ExpressError(204, "No Listings Exist in this Criteria");
  }
};

module.exports.boats = async (req, res) => {
  const allListings = await Listing.find({ category: "Boats" });
  if (allListings.length != 0) {
    res.render("./listings/index.ejs", { allListings });
  } else {
    throw new ExpressError(204, "No Listings Exist in this Criteria");
  }
};
