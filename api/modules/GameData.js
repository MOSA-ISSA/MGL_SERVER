const mongoose = require('mongoose');

const GameDataSchema = new mongoose.Schema({
    GameData:{}
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