const mongoose = require('mongoose');
const UserModule = require('../modules/users');
const { json } = require('express');
const User=UserModule;

const getAllUsersID =async()=>{
    const usersID=User.find({})
    .then((users) => {
      // console.log('All users:', users);
      let usersID=[]
      users.every((user)=>usersID.push(user.ID))
      // console.log(usersID);
      return usersID
    })
    .catch((e) => {
      console.error('Error retrieving users:', e.message);
    });
    return usersID
}
// getAllUsersID()
const IsUserExist=async(userID)=>await getAllUsersID()
.then((value) =>{
console.log(value);
// console.log(value.includes(userID));
return value.includes(userID)
})

//app.post("/creatNewUser", 
const creatNewUser = async (req, res) => {
    const canCreat= await IsUserExist(req.body.ID,).then((v)=>!v)
    console.log(canCreat);
    if (canCreat) {
      UserModule.create({
        ID: req.body.ID,
        mail: req.body.mail,
        password: req.body.password,
        name: req.body.name,
        image: "https://th.bing.com/th?q=Microsoft+Account+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=IL&setlang=en&adlt=moderate&t=1&mw=247",
        imageBackground: "https://th.bing.com/th/id/OIP.34cf-5PMzd2uKmixOC_2EgAAAA?pid=ImgDet&w=199&h=199&c=7&dpr=1.3",
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

// const creatNewUser = async (req, res) => {
//   const canCreat= await IsUserExist(req.body.ID,).then((v)=>!v)
//   console.log(canCreat);
//   if (canCreat) {
//     UserModule.create({
//       ID: req.body.ID,
//       mail: req.body.mail,
//       password: req.body.password,
//       name: req.body.name,
//       // createdAt: req.body.createdAt,
//     }).then((response) => {
//       res.status(200).json({
//         message: "done",
//         ...req.body
//       });
//     }).catch(e=>{
//       res.status(500).json({message:e.message})
//       console.log(e.message);
//     });
//   }else{
//     res.status(500).json({message:"User Exist"})
//   }
// }

// app.delete("/deleteUserByID",
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

const getUserByID = async (req, res) => {
  const ID = req.body.ID;
  console.log(req.body.ID);

  try {
    const user = await User.findOne({ ID });
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User found:", user);
    res.status(200).json({ message: user });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: error });
  }
};




module.exports={creatNewUser,deleteUserByID,getUserByID}
// exports to UserRouts("../routs/UserRoute");