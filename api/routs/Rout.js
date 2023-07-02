const { models } = require("mongoose");
const UserRouter = require("./UserRoute");
const GameDataRouter = require("./GameDataRoute");
const localRout = require("./GameDataRoute");


const Routs =  [
    UserRouter,
    GameDataRouter,
    localRout
 ] ;

 module.exports = Routs;