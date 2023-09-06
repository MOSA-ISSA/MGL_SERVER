const express = require("express");
const platformsController = require("../controller/platformsController");
const PlatformsRout = express.Router();

PlatformsRout.post("/getPlatformsByName",platformsController.getPlatformsByName)
PlatformsRout.post("/AddPlatformsData",platformsController.AddPlatformsData)
PlatformsRout.get("/getAllPlatforms",platformsController.getAllPlatforms)

module.exports = PlatformsRout;
// require("../Rout") to