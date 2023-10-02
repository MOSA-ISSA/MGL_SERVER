const mongoose = require('mongoose');
const UserModule = require('../modules/users');
const { json } = require('express');
const { validtion } = require('../../validtion/validtion');
const { images } = require('../../../src/asets/images/exportImages');
const { getAllmodule} = require('../../controller/localControler');
const User=UserModule;

const getAllUsersID =async(req,res)=>{
  return getAllmodule(User,res)
}

const uservalidation=(user)=>{
  let validtions=validtion(user)
  const values = Object.values(validtions);
  for (const v of values) {
    if (v !== "Valid") {
      return v;
    }
  }
  return "Valid";
}
// console.log(uservalidation(
//     {
//       ID:"mosa",
//       mail:"m@m.mm",
//       password:"123123123",
//       name:"m"
//   }
// ));

const getUserByID = async (req, res) => {
  // var ChangeToSlug=req?.body?.name?.trim().toLowerCase().replace(/\s+/g, '-')
  // to search by Slug ****||{slug:ChangeToSlug}
    return User.find({ID:req.body?.ID}||{})
    .then((item) => {
        // console.log('user', item);
        res?.status(200).json({data:item})
        return item
    })
    .catch((e) => {
        console.error('Error retrieving Data:', e.message);
        return e.message
    });
};

const isUserExist=async(req, res)=>{
  return getUserByID(req, null)
  .then((v)=>{
    res?.status(200).json({ message: !!v.length});
    return !!v.length
  })
}

const updateUserByID = async (req, res) => {
  try {
    const updatedUserData = req.body.updatedUser;
    const userID = req.body.userID
    let validation = uservalidation(updatedUserData);
    // console.log(validation);
    if (validation === 'Valid') {
      const canUpdate= await isUserExist({body:{ID:updatedUserData.ID}}).then((v)=>!v)
      // console.log(canUpdate);
        if (canUpdate||userID===updatedUserData.ID) {
          const updatedUser = await UserModule.updateOne(
            { ID: userID },
            { $set: updatedUserData },
            { new: true }
          );
          if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
          }
          return res.status(200).json({ message: "User updated successfully", user: updatedUser });
        }else {
          return res.status(400).json({ message: "User cannot be updated", validation:'Another user with this ID already exists'});
        }
      }
    else {
      return res.status(400).json({ message: "User cannot be updated", validation });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//app.post("/creatNewUser", 
const creatNewUser = async (req, res) => {
  const canCreat= await getUserByID(req, null).then((v)=>!v.length)
    console.log(canCreat);
  if (canCreat) {
    UserModule.create({
      ID: req.body.ID,
      mail: req.body.mail,
      password: req.body.password,
      name: req.body.name,
      image: images.ID,
      imageBackground: images.backgraund,
      // createdAt: req.body.createdAt,
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
    res.status(500).json({message:"User Exist"})
  }
}

const deleteUserByID =async(req, res)=>{
    // req.ID
    let ID = req.body.ID
    console.log(req.body.ID);
    //get the user that have the Id => delete by _id
    // let theUser=User.find({ID})
    // console.log(theUser);
    const result = await User.deleteOne({ ID: ID });
  
      if (result.deletedCount === 1) {
        res.status(200).json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
}

// isUserExist({body:{ID:"mosa"}}).then((v)=>{console.log(v);})
// getUserByID({body:{ID:"mosa"}},null).then((v)=>{console.log(v.length);})

module.exports={
  creatNewUser,
  deleteUserByID,
  getUserByID,
  isUserExist,
  updateUserByID,
  getAllUsersID,
}
// exports to UserRouts("../routs/UserRoute");