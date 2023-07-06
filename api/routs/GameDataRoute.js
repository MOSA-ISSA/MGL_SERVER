const express = require("express");
const GameDataController = require("../controller/GameDataController");
const GameDataRouter = express.Router();

GameDataRouter.get("/getAllGamesName",GameDataController.getAllGamesName)
GameDataRouter.get("/getAllGamesData",GameDataController.getAllGamesData)
GameDataRouter.post("/getGameByName",GameDataController.getGameByName)

module.exports = GameDataRouter;