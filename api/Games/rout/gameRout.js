const express = require("express");
const gameController = require("../controller/gamesController.js");
const gameRout = express.Router();

gameRout.get("/getAllGames",gameController.getAllGames)
gameRout.post("/AddGameData",gameController.AddGameData)
gameRout.post("/getGameByName",gameController.getGameByName)
gameRout.post("/testv2",gameController.testv2)

module.exports = gameRout;
// require("../Rout") to