const mongoose = require('mongoose');
const Genre = require('../modules/GenreModules');//genre
const { getModulesByName, AddModulesData, getAllmodule } = require('../../controll');

const getGenreByName =async(req,res)=>{
  return getModulesByName(Genre,req,res)
}
// getGenreByName({ body: { name:"test" } },).then(v=>{console.log(v.length);})

const AddGenreData = async (req, res) => {
  return AddModulesData(Genre,req,res)
}

const getAllGenreNamesAndImage =async(req,res)=>{
  return getAllmodule(Genre,res)
}

module.exports={getGenreByName,AddGenreData,getAllGenreNamesAndImage}
// to 
// require ("../rout/genreRout.js")