const mongoose = require('mongoose');
const Developer = require('../modules/DeveloperModules');
const { getModulesByName, AddModulesData, getAllmodule } = require('../../controll');

const getDeveloperByName =async(req,res)=>{
  return getModulesByName(Developer,req,res)
}
// getDeveloperByName({ body: { name:"test" } },).then(v=>{console.log(v.length);})

const AddDeveloperData = async (req, res) => {
  return AddModulesData(Developer,req,res)
}

const getAllDeveloper =async(req,res)=>{
  return getAllmodule(Developer,res)
}

module.exports={getDeveloperByName,AddDeveloperData,getAllDeveloper}