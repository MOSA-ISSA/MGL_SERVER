const express = require("express");
const UserController = require("../controller/UserController");
const UserRouter = express.Router();

UserRouter.delete("/deleteUserByID",UserController.deleteUserByID)
UserRouter.post("/creatNewUser",UserController.creatNewUser)
UserRouter.post("/getUserByID",UserController.getUserByID)

module.exports = UserRouter;