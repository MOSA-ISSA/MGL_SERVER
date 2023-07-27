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


module.exports={
    validtion,
    LinkValidtion,
    arrayLinkValidtion,
}