const mongoose = require('mongoose');
const Platforms = require('../modules/platformsModule');
const { getModulesByName, AddModulesData, getAllmodule } = require('../../controll');

const getPlatformsByName =async(req,res)=>{
  return getModulesByName(Platforms,req,res)
}
// getPlatformsByName({ body: { name:"test" } },).then(v=>{console.log(v.length);})

const AddPlatformsData = async (req, res) => {
  return AddModulesData(Platforms,req,res)
}

const getAllPlatforms =async(req,res)=>{
  return getAllmodule(Platforms,res)
}

module.exports={getPlatformsByName,AddPlatformsData,getAllPlatforms}
// to 
// require ("../rout/platformsRout.js")