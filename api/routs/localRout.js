const express = require("express");
const { checkRespond, RWOGgameModulesData } = require("../controller/localControler");
const localRout = express.Router();

localRout.get("/checkRespond",checkRespond)
localRout.post("/RWOGgameModulesData",RWOGgameModulesData)

module.exports = localRout;