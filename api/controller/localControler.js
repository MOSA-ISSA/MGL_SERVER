const Slug =(name)=>{
  // console.log(name)
  // try{
    return name?.trim().toLowerCase().replace(/\s+/g, '-')
    // name.name.trim().toLowerCase().replace(/\s+/g, '-')
  // }
  // catch(e){
  //   console.log(e,"**************************",name.name);
  // }
}

const checkRespond =async(req, res) => {
    res.status(200).json({
        message: "server respond",
    });
}

const getModulesByName =async(module,req,res)=>{

    var ChangeToSlug=Slug(req.body.name)

    return module.find({slug:ChangeToSlug}||{ID:req.body.ID}||{})
    .then((item) => {
        // console.log('Data', item);
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

    // const {name,description,released,background_image,metacritic_platforms,platforms,} = req?.body;
    //  const metacritic=[]
    //  const platformsAndStores=platforms
    // if(metacritic_platforms){
    //   metacritic_platforms.forEach((item)=>{
    //     metacritic.push({
    //       metascore:item.metascore,
    //       url:item.url,
    //       platformName:item.platform.slug
    //     })
    //   })
    // }


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

          background_image:req.body.background_image,
          description:req.body.description,
          metacritic:req.body.metacritic,
          game_series_name:req.body.game_series_name,
          game_series_count:req.body.game_series_count,
          released:req.body.released,
          short_screenshots:req.body.short_screenshots,
          website:req.body.website,
          alternative_names:req.body.alternative_names,
          esrb_rating:req.body.esrb_rating,
          platformsAndStores:req.body.platformsAndStores,
          developers:req.body.developers,
          genres:req.body.genres,
          tags:req.body.tags,
          publishers:req.body.publishers,

          ///////////////////////////////
        }).then((v)=>{
          res?.status(500).json({message:'done'})
          console.log(v);
        })
        // module.creat({...req.body}).then((response) => {
        //   res.status(200).json({
        //     message: "done",
        //     castName
        //   });})
        .catch(e=>{
          res?.status(500).json({message:e.message})
          console.log(e.message);
        });
      }else{
        res?.status(500).json({message:"Data Include"})
      }
    }catch(e){
        res?.status(500).json({message:e.message})
        console.log(e.message);
    }
}

const castRowgParamtoGameData = (param)=>{
  return param?.map((item)=>{
    return (
      item.store?{
        name:Slug(item?.store?.name),
        url:item?.store?.domain,
      }:
      item.metascore?{
        metascore:item?.metascore,
        url:item?.url,
        platformName:Slug(item?.platform?.name),
      }:
      Slug(item?.name)||
      // Slug(item?.platform?.name)||
      0
    )
    }
  )
}

const RWOGgameModulesData = async (module,req,res) => {
  const {
    name,
    description,
    description_raw,
    metacritic_platforms,// cast // name + metascore + url
    released,
    background_image,
    background_image_additional,//+ to short_screenshots
    short_screenshots,// not in 
    website,
    alternative_names,
    metacritic_url,
    stores,
    developers,
    genres,
    tags,
    publishers,
    esrb_rating,
    platforms,// cast // name 
    clip,// x
  } = req?.body;
  // console.log(name);
  

  // const newItemForm = CastRowgData([])


  try{
    const canAddGames= await getModulesByName(module,req).then((v)=>!v.length)
    // console.log(canAddGames,"canAddGames");
    if (canAddGames) {
      var castName=name.trim().toLowerCase().replace(/\s+/g, ' ')
      module.create({
        id: (await module.find({})).length,// auto all
        name: castName, // all
        description:description_raw,
        released,
        background_image,
        website,
        alternative_names,
        metacritic_url,
        metacritic_platforms:castRowgParamtoGameData(metacritic_platforms),
        // platforms:castRowgParamtoGameData(),
        // platformsAndStores:castRowgParamtoGameData(stores),
        developers:castRowgParamtoGameData(developers),
        genres:castRowgParamtoGameData(genres),
        tags:castRowgParamtoGameData(tags),
        publishers:castRowgParamtoGameData(publishers),
        esrb_rating:esrb_rating.name,
      }).then((v)=>{
        res?.status(500).json({message:'done'})
        console.log(v);
      })  
      .catch(e=>{
        res.status(500).json({message:e.message})
        console.log(e.message);
      });
    }else{
      res.status(500).json({message:"Data Include"})
    }
  }catch(e){
      res.status(500).json({message:e.message})
      console.log(e);
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

          ID:item.ID,
          image:item.image,
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

const deleteModuleByName =async(module,res)=>{
  let name = req.body.name

  const result = await module.deleteOne({name});

    if (result.deletedCount === 1) {
      res?.status(200).json({ message: "User deleted successfully" });
    } else {
      res?.status(404).json({ message: "User not found" });
    }
}



// const checkIfCanCreat=(module,param)=>{
  // arrayCheckModuleValidation('getDeveloperByName',data)
  // param.forEach((item)=>{
  //   var name = item?.store?.name||item?.name||item?.platform?.name
  //   if(getModulesByName(module,{body:{name:name}}).then((v)=>!v.length)){
  //     CastRowgDatatoCreat(item)
  //   }
  // })
  
// }//[ 'xbox-360', 'playstation-3', 'xbox-one', 'pc' ]

const CastRowgDataItem = (type, item) => {
  // Define a mapping object for casting based on types
  const typeMappings = {
    metacritic: {
      metascore: item.metascore,
      url: item.url,
      platformName: item.platform.slug,
    },
    platformsAndStores: {
      names:item.map((item)=>item.platforms.name.trim().toLowerCase().replace(/\s+/g, '-'))
    },
    developers: {
    },
    genres: {
    },
    tags: {
    },
    publishers: {
    }
    // Add more type mappings as needed
  };
  // Check if the provided 'type' exists in the mappings
  if (type in typeMappings) {
    return typeMappings[type];
  }
  // Return an empty object if 'type' doesn't match any mapping
  return {};
};

const CastRowgDatatoCreat = (RowgData,) => {
  const NewForm = [];

  if (RowgData) {
    RowgData.forEach((item) => {
      const castedItem = CastRowgDataItem(type, item);
      NewForm.push(castedItem);
    });
  }

  return NewForm;
};

module.exports={
    checkRespond,
    getModulesByName,
    AddModulesData,
    getAllmodule,
    deleteModuleByName,
    RWOGgameModulesData,
    Slug,
}