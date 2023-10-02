const express = require("express");
const UserController = require("../controller/UserController");
const UserRouter = express.Router();

UserRouter.delete("/deleteUserByID",UserController.deleteUserByID)
UserRouter.post("/creatNewUser",UserController.creatNewUser)
UserRouter.post("/getUserByID",UserController.getUserByID)
UserRouter.post("/isUserExist",UserController.isUserExist)
UserRouter.put("/updateUserByID",UserController.updateUserByID)
UserRouter.get("/getAllUsersID",UserController.getAllUsersID)


module.exports = UserRouter;