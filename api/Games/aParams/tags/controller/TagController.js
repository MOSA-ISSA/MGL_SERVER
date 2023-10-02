const mongoose = require('mongoose');
const Tag = require('../modules/TagModule.js');//Tag
const { getModulesByName, AddModulesData, getAllmodule } = require('../../../../controller/localControler.js');


const getTagByName =async(req,res)=>{
  return getModulesByName(Tag,req,res)
}
// getTagByName({ body: { name:"test" } },).then(v=>{console.log(v.length);})

const AddTagData = async (req, res) => {
  return AddModulesData(Tag,req,res)
}

const getAllTagNames =async(req,res)=>{
  return getAllmodule(Tag,res)
}

module.exports={getTagByName,AddTagData,getAllTagNames}
// to 
// require ("../rout/TagRout.js")