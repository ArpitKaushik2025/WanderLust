const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });
const { cloudinary } = require("../cloudConfig.js");

// Index
module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
};

// New
module.exports.renderNewForm = (req, res) => {
  res.render("./listings/new.ejs");
};

// Show
module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "owner" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "The Listing does not exist.");
    res.redirect("/listings");
  }
  res.render("./listings/show.ejs", { listing });
};

// Create
module.exports.createListing = async (req, res, next) => {
  let location = req.body.listing.location;
  let country = req.body.listing.country;
  let geoLocation = location + ", " + country;
  let response = await geocodingClient
    .forwardGeocode({
      query: geoLocation,
      limit: 1,
    })
    .send();

  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  newListing.geometry = response.body.features[0].geometry;
  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

// Edit
module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "The Listing does not exist.");
    res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  res.render("./listings/edit.ejs", { listing, originalImageUrl });
};

// Update
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("update", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

// Delete
module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  await cloudinary.uploader.destroy(`${listing.image.filename}`);
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("error", "Listing Deleted!");
  res.redirect("/listings");
};

// Search Bar
module.exports.searchListing = async (req, res) => {
  const listing = await Listing.findOne({ title: req.body.search });
  const id = listing._id;
  res.redirect(`/listings/${id}`);
};
