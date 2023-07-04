const mongoose = require('mongoose');
const UserModule = require('../modules/users');
const { json } = require('express');
const { validtion } = require('../validtion/validtion');
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

const updateUserByID = async (req, res) => {
  try {
    const updatedUserData = req.body.updatedUser;
    const userID = req.body.userID
    let validation = uservalidation(updatedUserData);
    // console.log(validation);
    if (validation === 'Valid') {
      const canUpdate= await IsUserExist(req.body.userID,).then((v)=>!v)
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

const IsUserExist=async(userID)=>await getAllUsersID()
.then((value) =>{
console.log(value);
// console.log(value.includes(userID));
return value.includes(userID)
})

const isUserExist=async(req, res)=>{
  await getAllUsersID()
  .then((value) =>{
    // console.log(value);
    // console.log(value.includes(req.body.ID)));
    res.status(200).json({ message: value.includes(req.body.ID) });
  })
}

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




module.exports={
  creatNewUser,
  deleteUserByID,
  getUserByID,
  isUserExist,
  updateUserByID
}
// exports to UserRouts("../routs/UserRoute");