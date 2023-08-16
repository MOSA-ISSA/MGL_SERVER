const mongoose = require('mongoose');
const {LinkValidtion, arrayLinkValidtion} = require('../validtion/validtion');

// Define sub-schemas for nested objects
const platformsAndStores = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image_background: { type: String },
    url:{type: String}
});


// Define the main GameDataSchema
const GameDataSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    slug: { type: String, required: true },
    name: { type: String, required: true },
    name_original: { type: String, required: true },
    description: { type: String, required: true },
    metacritic: { type: Number, required: true },
    game_series_count: { type: Number },
    released: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                return value instanceof Date && !isNaN(value);
            },
            message: 'Invalid date format or value.',
        },
    },////--------------------------------------------------------
    background_image: { 
        type: String, 
        validate: {
            validator: (val)=> LinkValidtion(val),
            message: 'link not valid',
        },
    },
    short_screenshots: {
        type: Array,
        validate: {
            validator: (val)=> arrayLinkValidtion(val),
            message: 'link not valid',
        },
    },
    website: {
        type: String,
        validate: {
            validator: (val)=> LinkValidtion(val),
            message: 'link not valid',
        }, 
    },
    alternative_names: {
        type: Array,
    },
    metacritic_url: { 
        type: String,
        validate: {
            validator: (val)=> LinkValidtion(val),
            message: 'link not valid',
        },
    },
    esrb_rating: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return ['Everyone', 'Everyone 10+', 'Teen', 'Mature', 'Adults Only'].includes(value);
            },// import from data
            message: 'Invalid ESRB rating. Must be one of: Everyone, Everyone 10+, Teen, Mature, Adults Only.',
        },
    },//----------------------------------------------------------------------
    platformsAndStores: {type: String,},// choices from all platformsAndStores if its not err,
    developers: {type: String,},// choices from all developers if its not Add,
    genres: {type: String,},// choices from all genres if its not Add
    tags: {type: String,},// choices from all tags if its not Add,
    publishers: {type: String,},// choices from all publishers if its not Add,,
});

const GameModule = mongoose.model('GameData', GameDataSchema);

module.exports = GameModule;


// const GameDataSchema = new mongoose.Schema({
//     id: { type: Number, required: true },
//     slug: { type: String, required: true },
//     name: { type: String, required: true },
//     name_original: { type: String, required: true },
//     description: { type: String, required: true },
//     metacritic: { type: Number, required: true },
//     released: {
//         type: Date,
//         required: true,
//         // Custom validation function can be added here if needed
//     },
//     background_image: { type: String, required: true },
//     short_screenshots: {
//         type: Array,
//         // Custom validation function can be added here if needed
//     },
//     website: { type: String },
//     ratingsWebsite: {
//         type: Array,
//         // Custom validation function can be added here if needed
//     },
//     alternative_names: {
//         type: Array,
//     },
//     metacritic_url: { type: String, required: true },
//     game_series_count: { type: Number },
//     parent_platforms: { type: Array },
//     stores: {
//         type: Array,
//         // Schema for stores can be added here if needed
//     },
//     developers: {
//         type: Array,
//         // Schema for developers can be added here if needed
//     },
//     genres: {
//         type: Array,
//         // Schema for genres can be added here if needed
//     },
//     tags: {
//         type: Array,
//         // Schema for tags can be added here if needed
//     },
//     publishers: {
//         type: Array,
//         // Schema for publishers can be added here if needed
//     },
//     esrb_rating: {
//         type: String,
//         required: true,
//         // Custom validation function can be added here if needed
//     },
//     requirements:{
//         minimum:{type: String,},
//         recommended:{type: String,}
//     }
// });


// const GameDataSchema = new mongoose.Schema({
//     id:{required:true,},
//     slug:{required:true,},
//     name:{required:true,},
//     name_original: {required:true,},
//     description: {required:true,},
//     metacritic: {required:true,type:Number},
//     released: {
//         required:true,
//     // validate:{
//     //   validator: value =>,
//     //   message: props => `${props.value} is not valid`
//     // },
//     },//Date Schema
//     background_image:{type:String,},
//     short_screenshots:{
//         type:Array,
//     // validate:{
//     //   validator: value =>,
//     //   message: props => `${props.value} is not valid`
//     // },
//     },
//     website:{type:String,},
//     ratingsWebsite:{
//         type:Array,
//     },//rating Schema website name rating link
//     alternative_names:{type:Array,},//Schema String
//     metacritic_url:{type:String},
//     game_series_count: {type:Number},
//     parent_platforms:{type:Array,},
//     stores:{type:Array,},//Schema
//     developers:{type:Array,},//Schema
//     genres:{type:Array,},//Schema
//     tags:{type:Array,},//Schema
//     publishers:{type:Array,},//Schema
//     esrb_rating:{required:true,},//age Schema

// })

// const GameModule = mongoose.model('gameData', GameDataSchema);
// // key / refrens / to data bace

// module.exports = GameModule

