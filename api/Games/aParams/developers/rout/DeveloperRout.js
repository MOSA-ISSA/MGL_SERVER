const express = require("express");
const DeveloperController = require("../controller/DeveloperController");
const DeveloperRout = express.Router();

DeveloperRout.post("/getDeveloperByName",DeveloperController.getDeveloperByName)
DeveloperRout.post("/AddDeveloperData",DeveloperController.AddDeveloperData)
DeveloperRout.get("/getAllDeveloper",DeveloperController.getAllDeveloper)

module.exports = DeveloperRout;
// require("../Rout") to