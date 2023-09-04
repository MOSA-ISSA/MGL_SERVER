const mongoose = require('mongoose');
const Tag = require('../modules/TagModule.js');//Tag

const getTagByName =async(req,res)=>{
  console.log(req.body);
  var ChangeToSlug=req.body.name.toLowerCase().replace(/\s+/g, '-')

  return Tag.find({slug:ChangeToSlug}||{})
  .then((g) => {
    console.log('TagData', g);
    res?.status(200).json({TagName:g})
    return g
  })
  .catch((e) => {
    console.error('Error retrieving TagData:', e.message);
    return e.message
  });
}
// getTagByName({ body: { name:"test" } },).then(v=>{console.log(v.length);})

const AddTagData = async (req, res) => {
  // console.log(req.body.id,"id");
  try{
    const canAddGames= await getTagByName(req).then((v)=>!v.length)
    // console.log(canAddGames,"canAddGames");
    if (canAddGames) {
        var castName=req.body.name.toLowerCase().replace(/\s+/g, ' ')
        Tag.create({
        id: (await Tag.find({})).length,// auto 
        name: castName,
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
      res.status(500).json({message:"Game TagData Include"})
    }
  }catch(e){
      res.status(500).json({message:e.message})
      console.log(e.message);
  }
}

const getAllTagNames =async(req,res)=>{
  return Tag.find({})
  .then((g) => {
    // console.log('Tags', g);
    const TagNamesAndImage= g.map((item)=>{
      var data= {name:item.name}
      return data
    })
    res?.status(200).json({TagName:TagNamesAndImage})
    return g
  })
  .catch((e) => {
    console.error('Error retrieving Tags:', e.message);
    return e.message
  });
}

module.exports={getTagByName,AddTagData,getAllTagNames}
// to 
// require ("../rout/TagRout.js")