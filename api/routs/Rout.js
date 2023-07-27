const { models } = require("mongoose");
const UserRouter = require("./UserRoute");
const GameDataRouter = require("./GameDataRoute");
const localRout = require("./localRout");
const GamesDataRouter = require("./GamesDataRoute");



const Routs =  [
    UserRouter,
    GameDataRouter,
    localRout,
    // GamesDataRouter,
 ] ;

 module.exports = Routs;