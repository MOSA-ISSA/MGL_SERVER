const { models } = require("mongoose");
const UserRouter = require("./UserRoute");
const GameDataRouter = require("./GameDataRoute");
const localRout = require("./localRout");
const GamesDataRouter = require("./GamesDataRoute");
const GenreRout = require("./GamePamramsRout/genreRout");



const Routs =  [
    UserRouter,
    GameDataRouter,
    localRout,
    GenreRout,
    // GamesDataRouter,
 ] ;

 module.exports = Routs;