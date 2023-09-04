const express = require("express");
const genreController = require("../controller/genreController");
const genreRout = express.Router();

genreRout.post("/getGenreByName",genreController.getGenreByName)
genreRout.post("/AddGenreData",genreController.AddGenreData)
genreRout.get("/getAllGenreNamesAndImage",genreController.getAllGenreNamesAndImage)

module.exports = genreRout;
// require("../Rout") to