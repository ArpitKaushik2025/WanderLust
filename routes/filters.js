const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const filterController = require("../controller/filters.js");

router.get("/trending", wrapAsync(filterController.trending));

router.get("/rooms", wrapAsync(filterController.rooms));

router.get("/city", wrapAsync(filterController.city));

router.get("/mountains", wrapAsync(filterController.mountains));

router.get("/castles", wrapAsync(filterController.castles));

router.get("/pools", wrapAsync(filterController.pools));

router.get("/camping", wrapAsync(filterController.camping));

router.get("/farms", wrapAsync(filterController.farms));

router.get("/beach", wrapAsync(filterController.beach));

router.get("/arctic", wrapAsync(filterController.arctic));

router.get("/boats", wrapAsync(filterController.boats));

module.exports = router;
