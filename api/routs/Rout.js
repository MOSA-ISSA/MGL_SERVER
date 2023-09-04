const { models } = require("mongoose");
const UserRouter = require("../Users/rout/UserRoute");
const GameDataRouter = require("./GameDataRoute");
const localRout = require("./localRout");
const GamesDataRouter = require("./GamesDataRoute");
const genreRout = require("../Games/aParams/ganre/rout/genreRout");
const DeveloperRout = require("../Games/aParams/developers/rout/DeveloperRout");
const TagRout = require("../Games/aParams/tags/rout/TagRout");


const Routs =  [
    UserRouter,
    // GameDataRouter,
    localRout,
    genreRout,
    DeveloperRout,
    TagRout,
    // GamesDataRouter,
 ] ;

 module.exports = Routs;