const mongoose = require('mongoose');
const Publishers = require('../modules/publishersModules');
const { getModulesByName, AddModulesData, getAllmodule } = require('../../controll');

const getPublishersByName =async(req,res)=>{
  return getModulesByName(Publishers,req,res)
}
// getpublishersByName({ body: { name:"test" } },).then(v=>{console.log(v.length);})

const AddPublishersData = async (req, res) => {
  return AddModulesData(Publishers,req,res)
}

const getAllPublishers =async(req,res)=>{
  return getAllmodule(Publishers,res)
}

module.exports={getPublishersByName,AddPublishersData,getAllPublishers}
// to 
// ("publishersRout.js")