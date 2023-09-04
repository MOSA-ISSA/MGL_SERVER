const { models } = require("mongoose");
const UserRouter = require("../Users/rout/UserRoute");
const GameDataRouter = require("./GameDataRoute");
const localRout = require("./localRout");
const GamesDataRouter = require("./GamesDataRoute");
const GenreRout = require("../Games/#params/ganre/rout/genreRout");


const Routs =  [
    UserRouter,
    // GameDataRouter,
    localRout,
    GenreRout,
    // GamesDataRouter,
 ] ;

 module.exports = Routs;