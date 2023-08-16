const express = require("express");
const genreController = require("../../controller/GamePamramsControls/genreController");
const genreRout = express.Router();

genreRout.post("/getGenreByName",genreController.getGenreByName)

module.exports = genreRout;