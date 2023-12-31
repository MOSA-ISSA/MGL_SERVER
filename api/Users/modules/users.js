const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const userSchema = new mongoose.Schema({
  ID:{
    type:String,
    required:true,
    minLength:4,
    maxLength:20,
    validate:{
      validator: value => !value.includes('  '),
      message: props => `${props.value} is not valid`
    },
  },
  slug: { type: String, slug: "ID" },
  mail:{
    type:String,
    required:true,
    lowercase:true,
    // validate:{
    //   validator: value =>,
    //   message: props => `${props.value} is not valid`
    // },
  },
  password:{
    type:String,
    required:true,
    minLength:8,
    maxLength:20,
  },
  name:{
    type:String,
    required:true,
    minLength:1,
    maxLength:20,
  },
  createdAt:{
    type:Date,
    immutable:true,
    default:()=> Date.now()
  },
  list:{
    played:[],
    planToPlay:[],
    playing:[],
    trash:[],
  },
  image: {
    type: String, 
  },
  imageBackground: {
    type: String,
  },
});

const userModule = mongoose.model('Users', userSchema);
// key / refrens / to data bace

module.exports = userModule
