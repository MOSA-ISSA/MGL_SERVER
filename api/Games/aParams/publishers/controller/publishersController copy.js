const mongoose = require('mongoose');
const publishers = require('../modules/publishersModules');

const getPublishersByName =async(req,res)=>{
  console.log(req.body);
  var ChangeToSlug=req.body.name.trim().toLowerCase().replace(/\s+/g, '-')

  return publishers.find({slug:ChangeToSlug}||{})
  .then((p) => {
    console.log('publishersData', p);
    res?.status(200).json({publishersName:p})
    return p
  })
  .catch((e) => {
    console.error('Error retrieving publishersData:', e.message);
    return e.message
  });
}
// getpublishersByName({ body: { name:"test" } },).then(v=>{console.log(v.length);})

const AddPublishersData = async (req, res) => {
  // console.log(req.body.id,"id");
  try{
    const canAddGames= await getPublishersByName(req).then((v)=>!v.length)
    // console.log(canAddGames,"canAddGames");
    if (canAddGames) {
      var castName=req.body.name.trim().toLowerCase().replace(/\s+/g, ' ')
      publishers.create({
        id: (await publishers.find({})).length,// auto 
        name: castName,
        image_background: req.body.image_background||'',
        games_names:req.body.games_names//////////////////////////////////////
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
      res.status(500).json({message:"Game publishersData Include"})
    }
  }catch(e){
      res.status(500).json({message:e.message})
      console.log(e.message);
  }
}

const getAllPublishers =async(req,res)=>{
  return publishers.find({})
  .then((g) => {
    // console.log('publishers', g);
    const publishersNamesAndImage= g.map((item)=>{
      var data= {
        name:item.name,
        image_background:item.image_background,
      }
      return data
    })
    res?.status(200).json({publishersName:publishersNamesAndImage})
    return g
  })
  .catch((e) => {
    console.error('Error retrieving publishers:', e.message);
    return e.message
  });
}

module.exports={getPublishersByName,AddPublishersData,getAllPublishers}
// to 
// ("publishersRout.js")