const mongoose = require('mongoose');
const GameModule = require('../modules/GameDataModules');
const { getModulesByName, AddModulesData, getAllmodule, RWOGgameModulesData } = require('../../controller/localControler');

const getGameByName =async(req,res)=>{
  return getModulesByName(GameModule,req,res)
}
// getGenreByName({ body: { name:"test" } },).then(v=>{console.log(v.length);})

const AddGameData = async (req, res) => {
  return AddModulesData(GameModule,req,res)
}

const getAllGames =async(req,res)=>{
  return getAllmodule(GameModule,res)
}

const testv2 =async(req,res)=>{
  return RWOGgameModulesData(GameModule,req,res)
}

module.exports={getGameByName,AddGameData,getAllGames,testv2}