const { models } = require("mongoose");
const UserRouter = require("../Users/rout/UserRoute");
const GameDataRouter = require("./GameDataRoute");
const localRout = require("./localRout");
const GamesDataRouter = require("./GamesDataRoute");
const genreRout = require("../Games/aParams/ganre/rout/genreRout");


const Routs =  [
    UserRouter,
    // GameDataRouter,
    localRout,
    genreRout,
    // GamesDataRouter,
 ] ;

 module.exports = Routs;