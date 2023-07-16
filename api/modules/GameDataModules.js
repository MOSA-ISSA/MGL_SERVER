const mongoose = require('mongoose');

const GameDataSchema = new mongoose.Schema({
    id:{required:true,},
    slug:{required:true,},
    name:{required:true,},
    name_original: {required:true,},
    description: {required:true,},
    metacritic: {required:true,type:Number},
    released: {
        required:true,
    // validate:{
    //   validator: value =>,
    //   message: props => `${props.value} is not valid`
    // },
    },//Date Schema
    background_image:{type:String,},
    short_screenshots:{
        type:Array,
    // validate:{
    //   validator: value =>,
    //   message: props => `${props.value} is not valid`
    // },
    },
    website:{type:String,},
    ratingsWebsite:{
        type:Array,
    },//rating Schema website name rating link
    alternative_names:{type:Array,},//Schema String
    metacritic_url:{type:String},
    game_series_count: {type:Number},
    parent_platforms:{type:Array,},
    stores:{type:Array,},//Schema
    developers:{type:Array,},//Schema
    genres:{type:Array,},//Schema
    tags:{type:Array,},//Schema
    publishers:{type:Array,},//Schema
    esrb_rating:{required:true,},//age Schema

})

const GameListModule = mongoose.model('gamesList', GameDataSchema);
// key / refrens / to data bace

module.exports = GameListModule


// gameName:{
    //     type:String,
    //     required:true,
    // },
    // gameShortName:{
    //     type:String,
    //     required:true,
    // },
    //      rating: 5, key: '1',
         
    //      Developer:'EA Vancouver', Publisher:'EA Sports', Engine:'Frostbite 3',
    //      Release:{year:'2020',manth:'9',day:'30',},

    //      Mode:['Single-player','multiplayer'],

    //      genres:['Sports','Simulation','Battle Royale'],

    //      ages:['E'],

    //      platforms:['PlayStation','Xbox','PC','Nintendo Switch'],

    //      image:'https://th.bing.com/th/id/OIP.CB9KYJbHndll2j6fzqeH5gHaKf?pid=ImgDet&rs=1',

    //      PsStoreLink:'https://store.playstation.com/en-us/product/UP0006-CUSA31877_00-FIFAFOOTBALL2023',
    //      XboxStoreLink:'https://www.xbox.com/en-US/games/fifa-23',
    //      PCStoreLink:'https://www.ea.com/games/fifa/fifa-23',
    //      NSwitchStoreLink:'https://www.nintendo.com/store/products/ea-sports-fifa-23-nintendo-switch-legacy-edition-switch/',

    //      About:'FIFA 21 is a football video game published by Electronic Arts. It is the 30th and final installment in the FIFA series that is developed by EA Sports, and the final installment under the FIFA banner',