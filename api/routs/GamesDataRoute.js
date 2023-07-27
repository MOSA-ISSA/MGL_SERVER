const express = require("express");
const GamesDataController = require("../controller/GamesDataController");
const GamesDataRouter = express.Router();

GamesDataRouter.post("/AddGameData",GamesDataController.AddGameData)
GamesDataRouter.get("/getAllGamesID",GamesDataController.getAllGamesID)
// GamesDataRouter.post("/getGameByName",GamesDataController.getGameByName)

module.exports = GamesDataRouter;