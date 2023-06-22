const mongoose = require('mongoose');
const UserModule = require('../modules/users');
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

module.exports={creatNewUser,deleteUserByID}
// exports to UserRouts("../routs/UserRoute");