const mongoose = require('mongoose');
const genre = require('../../modules/GamePamramsSchema/GenreModules');//genre

const getGenreByName =async(req)=>{
    var Name=req.body.ID
    const GenreName=genre.find({name:Name})
    .then((g) => {
      console.log('All users:', g);
      let gName=[]
      g.every((genre)=>gName.push(genre.name))
      // console.log(usersID);
      return g
    })
    .catch((e) => {
      console.error('Error retrieving users:', e.message);
    });
    return GenreName
}

// const IsGameInclude=async(req)=>await getGenreByName(req)
// .then((value) =>{
// console.log(value);
// // console.log(value.includes(userID));
// return value.includes(userID)
// })

// const AddGenreData = async (req, res) => {
//     const canAddGames= await IsGameInclude(req.body.ID,).then((v)=>!v)
//     console.log(canAddGames);
//     if (canAddGames) {
//         genre.create({
//         id: req.body.id,
//         slug: req.body.slug,
//         name: req.body.name,
//         name_original: req.body.name_original,
//         description:req.body.description_raw,
//         metacritic: req.body.metacritic,
//         released: req.body.released,
//         background_image: req.body.background_image,
//         short_screenshots:req.body.short_screenshots,
//         website:req.body.website,
//         ratingsWebsite:req.body.ratingsWebsite,
//         alternative_names:req.body.alternative_names,
//         metacritic_url:req.body.metacritic_url,
//         game_series_count: req.body.game_series_count,
//         parent_platforms:req.body.parent_platforms,
//         stores: req.body.stores,
//         developers:req.body.developers,
//         genres:req.body.genres,
//         tags:req.body.tags,
//         publishers: req.body.publishers,
//         esrb_rating: req.body.esrb_rating,
//       }).then((response) => {
//         res.status(200).json({
//           message: "done",
//           ...req.body
//         });
//       }).catch(e=>{
//         res.status(500).json({message:e.message})
//         console.log(e.message);
//       });
//     }else{
//       res.status(500).json({message:"Game Include"})
//     }
// }

module.exports={getGenreByName}



const cars = ["Tesla", "BMW", "Honda", "Kia" ]
var carName =cars.find((val)=>val=="c")
console.log(carName);

cars.forEach((car,i)=>
console.log("car",i,car)
)

console.log("jamal birh is 1998/11/16");

const array=[10,20,30,50,90,70]
var last = array.pop()
console.log(last);