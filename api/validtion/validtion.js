const { AddModulesData } = require("../controller/localControler")
const { getModuleByName, getAllOf } = require("../fetchApi")

const validtion=(user)=>{
    let validtions=
    {
        ID:IDValidtion(user.ID),
        mail:mailValidtion(user.mail),
        name:nameValidtion(user.name),
        password:passwordValidtion(user.password),
    }
    return validtions
    // return true
}

const IDValidtion=(ID)=>{
    if (ID) {
        if (!ID.includes(' ')) {
            if (ID.length > 3) {return "Valid"
            }else{return ('userID length should be at least 4')} 
        }else{return ('userID should not include spaces')} 
    }
    return "Valid"
}

const mailValidtion=(mail)=>{
    if(mail){
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(mail) === false) {
            // console.log("Email is Not Correct");
            return 'Email is Not Correct';
        }else {
            // console.log("Email is Correct");
            return "Valid"
        }
    }
    return"Valid"
}

const nameValidtion=(name)=>{
    if(name){
        if (name.length > 0) {
            return "Valid"
        }
        else{
            return ('name length should be at least 1')
        } 
    }
    return"Valid"
}

const passwordValidtion=(password)=>{
    if(password){
        if (password.length > 7) {
            return "Valid"
        }
        else{
            return ('Password length should be at least 8')
        }
    }
    return"Valid"
}

const LinkValidtion=(imageLink)=>{
    const urlRegex = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/.*)?$/i;
    return urlRegex.test(imageLink);
}

const arrayLinkValidtion=(imagesLink)=>{
    if (Array.isArray(imagesLink)) {
        return imagesLink.every((img) => LinkValidtion(img));
    }
    return false;
}

const CheckModuleValidation=async (url,name,module)=>{
    // console.log(name);
    const v = await getModuleByName(url,{ name: name})
    var ValidtionName = v.data.length
    if (ValidtionName) {
        return true
    } else {
        await AddModulesData(module,{
            body:{
              name:name,
            }
          } 
        )
        // if creat true
        return CheckModuleValidation(url,name)
    }
}

const arrayCheckModuleValidation = async (url,names,module) => {
    console.log(names);
    if (Array.isArray(names)) {
      const validationResults = await Promise.all(
        names.map(async (name) => await CheckModuleValidation(url,name,module))
      );
      return validationResults.every((result) => result);
    }
    return false;
};

const theValidValues=async(url)=>{
    // console.log("*********");
    return await (
        getAllOf(url)
        .then(v=>v.data.map((item)=>item.name))
    )
}
// theValidValue('getAllTagNames','TagName').then(v=>{console.log("this",v)})

module.exports={
    validtion,
    LinkValidtion,
    arrayLinkValidtion,
    CheckModuleValidation,
    arrayCheckModuleValidation,
    theValidValues,
}