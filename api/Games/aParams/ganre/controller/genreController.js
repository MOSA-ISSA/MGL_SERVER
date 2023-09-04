const mongoose = require('mongoose');
const genre = require('../modules/GenreModules');//genre

const getGenreByName =async(req,res)=>{
  console.log(req.body);
  var ChangeToSlug=req.body.name.toLowerCase().replace(/\s+/g, '-')

  return genre.find({slug:ChangeToSlug}||{})
  .then((g) => {
    console.log('GenreData', g);
    res?.status(200).json({GenreName:g})
    return g
  })
  .catch((e) => {
    console.error('Error retrieving GenreData:', e.message);
    return e.message
  });
}
// getGenreByName({ body: { name:"test" } },).then(v=>{console.log(v.length);})

const AddGenreData = async (req, res) => {
  // console.log(req.body.id,"id");
  try{
    const canAddGames= await getGenreByName(req).then((v)=>!v.length)
    // console.log(canAddGames,"canAddGames");
    if (canAddGames) {
        var castName=req.body.name.toLowerCase().replace(/\s+/g, ' ')
        genre.create({
        id: (await genre.find({})).length,// auto 
        name: castName,
        // slug: req.body.slug,
        image_background: req.body.image_background||'',
      }).then((response) => {
        res.status(200).json({
          message: "done",
          castName
        });
      }).catch(e=>{
        res.status(500).json({message:e.message})
        console.log(e.message);
      });
    }else{
      res.status(500).json({message:"Game GenreData Include"})
    }
  }catch(e){
      res.status(500).json({message:e.message})
      console.log(e.message);
  }
}

const getAllGenreNamesAndImage =async(req,res)=>{
  return genre.find({})
  .then((g) => {
    // console.log('Genres', g);
    const GenreNamesAndImage= g.map((item)=>{
      var data= {name:item.name,image_background:item.image_background}
      return data
    })
    res?.status(200).json({GenreName:GenreNamesAndImage})
    return g
  })
  .catch((e) => {
    console.error('Error retrieving Genres:', e.message);
    return e.message
  });
}

module.exports={getGenreByName,AddGenreData,getAllGenreNamesAndImage}
// to 
// require ("../rout/genreRout.js")