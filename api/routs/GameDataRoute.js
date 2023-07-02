const express = require("express");
const GameDataController = require("../controller/GameDataController");
const GameDataRouter = express.Router();

GameDataRouter.get("/getAllGames",GameDataController.getAllGames)
GameDataRouter.get("/getGameByName",GameDataController.getGameByName)

module.exports = GameDataRouter;