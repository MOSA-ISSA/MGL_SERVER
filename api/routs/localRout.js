const express = require("express");
const { checkRespond } = require("../controller/localControler");
const localRout = express.Router();

localRout.get("/checkRespond",checkRespond)

module.exports = localRout;