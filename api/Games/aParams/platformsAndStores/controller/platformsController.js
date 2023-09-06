const mongoose = require('mongoose');
const platforms = require('../modules/platformsModule');

const getPlatformsByName =async(req,res)=>{
  console.log(req.body);
  var ChangeToSlug=req.body.name.trim().toLowerCase().replace(/\s+/g, '-')

  return platforms.find({slug:ChangeToSlug}||{})
  .then((g) => {
    console.log('platformsData', g);
    res?.status(200).json({PlatformsName:g})
    return g
  })
  .catch((e) => {
    console.error('Error retrieving PlatformsData:', e.message);
    return e.message
  });
}
// getPlatformsByName({ body: { name:"test" } },).then(v=>{console.log(v.length);})

const AddPlatformsData = async (req, res) => {
  // console.log(req.body.id,"id");
  try{
    const canAddGames= await getPlatformsByName(req).then((v)=>!v.length)
    // console.log(canAddGames,"canAddGames");
    if (canAddGames) {
        var castName=req.body.name.trim().toLowerCase().replace(/\s+/g, ' ')
        platforms.create({
        id: (await platforms.find({})).length,// auto 
        name: castName,
        url:req.body.url,//validation
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
      res.status(500).json({message:"Game PlatformsData Include"})
    }
  }catch(e){
      res.status(500).json({message:e.message})
      console.log(e.message);
  }
}

const getAllPlatforms =async(req,res)=>{
  return platforms.find({})
  .then((g) => {
    // console.log('Platforms', g);
    const PlatformsNamesAndImage= g.map((item)=>{
      var data= {
        name:item.name,
        image_background:item.image_background,
        url:item.url
      }
      return data
    })
    res?.status(200).json({PlatformsName:PlatformsNamesAndImage})
    return g
  })
  .catch((e) => {
    console.error('Error retrieving Platforms:', e.message);
    return e.message
  });
}

module.exports={getPlatformsByName,AddPlatformsData,getAllPlatforms}
// to 
// require ("../rout/platformsRout.js")