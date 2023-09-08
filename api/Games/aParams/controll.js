
const getModulesByName =async(module,req,res)=>{

    var ChangeToSlug=req.body.name.trim().toLowerCase().replace(/\s+/g, '-')

    return module.find({slug:ChangeToSlug}||{})
    .then((item) => {
        console.log('Data', item);
        res?.status(200).json({data:item})
        return item
    })
    .catch((e) => {
        console.error('Error retrieving Data:', e.message);
        return e.message
    });
}

const AddModulesData = async (module,req,res) => {
    // console.log(req.body.id,"id");
    //if module is class my Iadd some proprtis
    // const image_background=module.image_background
    // const games_names=module.games_names
    // const url=module.url
    try{
      const canAddGames= await getModulesByName(module,req).then((v)=>!v.length)
      // console.log(canAddGames,"canAddGames");
      if (canAddGames) {
        var castName=req.body.name.trim().toLowerCase().replace(/\s+/g, ' ')
        module.create({
          ////////////////////////////////
          id: (await module.find({})).length,// auto all
          name: castName, // all

          image_background: req.body.image_background||'',// X
          games_names:req.body.games_names,// X
          url:req.body.url,// X

          ///////////////////////////////
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
        res.status(500).json({message:"Data Include"})
      }
    }catch(e){
        res.status(500).json({message:e.message})
        console.log(e.message);
    }
}

const getAllmodule =async(module,res)=>{
    return module.find({})
    .then((item) => {
      // console.log('publishers', g);
      const moduleNames= item.map((item)=>{
        var data= {
          name:item.name,
          image_background:item.image_background,
        }
        return data
      })
      res?.status(200).json({data:moduleNames})
      return item
    })
    .catch((e) => {
      console.error('Error retrieving moduleNames:', e.message);
      return e.message
    });
}

module.exports={getModulesByName,AddModulesData,getAllmodule}