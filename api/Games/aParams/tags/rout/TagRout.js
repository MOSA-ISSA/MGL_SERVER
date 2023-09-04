const express = require("express");
const TagController = require("../controller/TagController");
const TagRout = express.Router();

TagRout.post("/getTagByName",TagController.getTagByName)
TagRout.post("/AddTagData",TagController.AddTagData)
TagRout.get("/getAllTagNames",TagController.getAllTagNames)

module.exports = TagRout;
// require("../Rout") to