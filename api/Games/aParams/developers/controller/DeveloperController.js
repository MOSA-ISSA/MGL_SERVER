const mongoose = require('mongoose');
const Developer = require('../modules/DeveloperModules');

const getDeveloperByName =async(req,res)=>{
  console.log(req.body);
  var ChangeToSlug=req.body.name.toLowerCase().replace(/\s+/g, '-')

  return Developer.find({slug:ChangeToSlug}||{})
  .then((g) => {
    console.log('DeveloperData', g);
    res?.status(200).json({DeveloperName:g})
    return g
  })
  .catch((e) => {
    console.error('Error retrieving DeveloperData:', e.message);
    return e.message
  });
}
// getDeveloperByName({ body: { name:"test" } },).then(v=>{console.log(v.length);})

const AddDeveloperData = async (req, res) => {
  // console.log(req.body.id,"id");
  try{
    const canAddGames= await getDeveloperByName(req).then((v)=>!v.length)
    // console.log(canAddGames,"canAddGames");
    if (canAddGames) {
      var castName=req.body.name.toLowerCase().replace(/\s+/g, ' ')
      Developer.create({
        id: (await Developer.find({})).length,// auto 
        name: castName,
        image_background: req.body.image_background||'',
        games_names:req.body.games_names//////////////////////////////////////
      }).then((response) => {
        res.status(200).json({
          message: "done",
          ...castName
        });
      }).catch(e=>{
        res.status(500).json({message:e.message})
        console.log(e.message);
      });
    }else{
      res.status(500).json({message:"Game DeveloperData Include"})
    }
  }catch(e){
      res.status(500).json({message:e.message})
      console.log(e.message);
  }
}

const getAllDeveloper =async(req,res)=>{
  return Developer.find({})
  .then((g) => {
    // console.log('Developer', g);
    const DeveloperNamesAndImage= g.map((item)=>{
      var data= {
        name:item.name,
        image_background:item.image_background,
        games_count:item.games_names.length
      }
      return data
    })
    res?.status(200).json({DeveloperName:DeveloperNamesAndImage})
    return g
  })
  .catch((e) => {
    console.error('Error retrieving Developers:', e.message);
    return e.message
  });
}

module.exports={getDeveloperByName,AddDeveloperData,getAllDeveloper}
// to 
// require ("../../routs/GamePamramsRout/DeveloperRout.js")