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
  const Games=GameListModule.find().then((games) => {
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

const getGameByName=async(req, res) => {
  const gameName=req.body.name
  GameListModule.findOne({ name: 'BioShock' }).then((user) => {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  })
  .catch((error) => {
    console.error('Error retrieving user:', error);
    res.status(500).json({ message: 'Internal server error' });
  })
}


module.exports={getAllGamesName,getGameByName}