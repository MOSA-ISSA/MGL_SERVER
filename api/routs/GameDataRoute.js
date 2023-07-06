const express = require("express");
const GameDataController = require("../controller/GameDataController");
const GameDataRouter = express.Router();

GameDataRouter.get("/getAllGamesName",GameDataController.getAllGamesName)
GameDataRouter.get("/getGameByName",GameDataController.getGameByName)

module.exports = GameDataRouter;