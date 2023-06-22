const { models } = require("mongoose");
const UserRouter = require("./UserRoute");
const GameDataRouter = require("./GameDataRoute");

const Routs =  [
    UserRouter,
    GameDataRouter
 ] ; 

 module.exports = Routs;