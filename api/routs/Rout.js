const { models } = require("mongoose");
const UserRouter = require("./UserRoute");
const GameDataRouter = require("./GameDataRoute");
const localRout = require("./localRout");



const Routs =  [
    UserRouter,
    GameDataRouter,
    localRout
 ] ;

 module.exports = Routs;