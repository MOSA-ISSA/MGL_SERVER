const { models } = require("mongoose");
const UserRouter = require("../Users/rout/UserRoute");
const localRout = require("./localRout");
const genreRout = require("../Games/aParams/ganre/rout/genreRout");
const DeveloperRout = require("../Games/aParams/developers/rout/DeveloperRout");
const TagRout = require("../Games/aParams/tags/rout/TagRout");
const publishersRout = require("../Games/aParams/publishers/rout/publishersRout");
const PlatformsRout = require("../Games/aParams/platformsAndStores/rout/PlatformsRout");
const gameRout = require("../Games/rout/gameRout");


const Routs =  [
    localRout,
    UserRouter,

    genreRout,
    DeveloperRout,
    TagRout,
    publishersRout,
    PlatformsRout,
    gameRout

 ] ;

 module.exports = Routs;