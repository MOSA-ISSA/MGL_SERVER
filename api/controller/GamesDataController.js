const mongoose = require('mongoose');
const GameData = require('../modules/GameDataModules');

const getAllGamesID =async()=>{
    const GameID=GameData.find({})
    .then((games) => {
      // console.log('All users:', users);
      let gamesID=[]
      games.every((game)=>gamesID.push(game.id))
      // console.log(usersID);
      return gamesID
    })
    .catch((e) => {
      console.error('Error retrieving users:', e.message);
    });
    return GameID
}

const IsGameInclude=async(userID)=>await getAllGamesID()
.then((value) =>{
console.log(value);
// console.log(value.includes(userID));
return value.includes(userID)
})

const AddGameData = async (req, res) => {
    const canAddGames= await IsGameInclude(req.body.ID,).then((v)=>!v)
    console.log(canAddGames);
    if (canAddGames) {
        GameData.create({
        id: req.body.id,
        slug: req.body.slug,
        name: req.body.name,
        name_original: req.body.name_original,
        description:req.body.description_raw,
        metacritic: req.body.metacritic,
        released: req.body.released,
        background_image: req.body.background_image,
        short_screenshots:req.body.short_screenshots,
        website:req.body.website,
        ratingsWebsite:req.body.ratingsWebsite,
        alternative_names:req.body.alternative_names,
        metacritic_url:req.body.metacritic_url,
        game_series_count: req.body.game_series_count,
        parent_platforms:req.body.parent_platforms,
        stores: req.body.stores,
        developers:req.body.developers,
        genres:req.body.genres,
        tags:req.body.tags,
        publishers: req.body.publishers,
        esrb_rating: req.body.esrb_rating,
      }).then((response) => {
        res.status(200).json({
          message: "done",
          ...req.body
        });
      }).catch(e=>{
        res.status(500).json({message:e.message})
        console.log(e.message);
      });
    }else{
      res.status(500).json({message:"Game Include"})
    }
}

module.exports={
    getAllGamesID,
    AddGameData,
  }