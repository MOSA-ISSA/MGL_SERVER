const mongoose = require('mongoose');
const GameListModule = require('../modules/GameData');
// const AllGames = require("../../json/Allgames.json");

// const gameList =new GameListModule({GameData:"game"})
// gameList.save().then(()=>{console.log('saved');})

// for (let i = 0; i < A.results.length; i++) {
//   const gameList =new GameListModule({GameData:A.results[i]})
//   gameList.save().then(()=>{console.log('saved');})
//   // const element = A.results[i].name;
//   // console.log(element);
// }

const getAllGamesName =async(req, res) => {
  const GameList=[]
  GameListModule.find().then((games) => {
        games.forEach((g)=>{
          // console.log(g.GameData.name)
          GameList.push(g.GameData.name)
        })
        res.status(200).json({
          message: "done",
          games:[...GameList],
        });
        return([...GameList])
    })
    // await console.log(Games);
}

const getAllGamesData =async(req, res) => {
  const GameList=[]
  GameListModule.find().then((games) => {
        games.forEach((g)=>{
          // console.log(g.GameData.name)
          GameList.push(g.GameData)
        })
        res.status(200).json({
          message: "done",
          games:[...GameList],
        });
        return([...GameList])
    })
}

const getGameByName=async(req, res) => {
  const gameName=req.body.gameName
  GameListModule.findOne({ 'GameData.name': gameName }) // Replace `gameName` with the actual name you want to search for
  .then((gameData) => {
    if (gameData) {
      res.status(200).json(gameData);
    } else {
      res.status(404).json({ message: 'gameData not found' });
    }
  })
  .catch((error) => {
    console.error('Error retrieving gameData:', error);
    res.status(500).json({ message: 'Internal server error' });
  });
}


module.exports={getAllGamesName,getGameByName,getAllGamesData}