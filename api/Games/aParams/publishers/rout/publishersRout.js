const express = require("express");
const publishersController = require("../controller/publishersController");
const publishersRout = express.Router();

publishersRout.post("/getPublishersByName",publishersController.getPublishersByName)
publishersRout.post("/AddPublisherData",publishersController.AddPublishersData)
publishersRout.get("/getAllPublishers",publishersController.getAllPublishers)

module.exports = publishersRout;
// require("../Rout") to