const mongoose = require('mongoose');
const { LinkValidtion, arrayLinkValidtion, arrayCheckModuleValidation, theValidValues, CheckModuleValidation,  } = require('../../validtion/validtion');
const slug = require('mongoose-slug-generator');
const { getAllOf } = require('../../fetchApi');
const platformsModule = require('../aParams/platformsAndStores/modules/platformsModule');
const DeveloperModule = require('../aParams/developers/modules/DeveloperModules');
const genreModule = require('../aParams/ganre/modules/GenreModules');
const TagModule = require('../aParams/tags/modules/TagModule');
const publishersModule = require('../aParams/publishers/modules/publishersModules');

mongoose.plugin(slug);

// Define the main GameDataSchema
const validValuesMessage="the valid values are "

const GameDataSchema = new mongoose.Schema({
    id: { type: Number, required: true },// auto
    slug: { type: String, slug: "name" },// auto
    name: { type: String, required: true },// required
    description: { type: String, required: true },// required
    metacritic: { type: Array,},// required
    game_series_name: { type: String },// required
    game_series_count: { type: Number },// auto
    released: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                return value instanceof Date && !isNaN(value);
            },
            message: 'Invalid date format or value.',
        },
    },//// required--------------------------------------------------
    updated:{
        type: Date,
        default: Date.now,
      },// auto
      background_image: { 
        type: String, 
        // validate: {
        //     validator: (val)=> LinkValidtion(val),
        //     message: 'link not valid',
        // }, // image link or value shude improve
    },//  required
    short_screenshots: {
        type: Array,
        // validate: {
        //     validator: (val)=> arrayLinkValidtion(val),
        //     message: 'link not valid',
        // },// image link or value shude improve
    },// required
    website: {
        type: String,
        validate: {
            validator: (val)=> LinkValidtion(val),
            message: 'link not valid',
        }, 
    },// required
    alternative_names: {
        type: Array,
    },// required
    metacritic_urlS_rating: { 
        type: String,
        validate: {
            validator: (val)=> LinkValidtion(val),
            message: 'link not valid',
        },
    },// required
    rating:{//auto get User_rating
        type: Number,
    },
    website_rating:{// not now
        type: Number,
    },
    reviews:{// auto get User_reviews
        type: Array,
    },
    metacritic_platforms:{
        // required: true,
        // metascore:{type:Number},
        // platformName:{
        //     type: String,
        //     required: true,
        //     validate: {
        //         validator: async function (value) {
        //             const v = await getAllOf('getAllPlatforms');
        //             return v.includes(value);
        //         },// import from data
        //         message: validValuesMessage + getAllOf('getAllPlatforms'),
        //     },
        // },
        // url:{type:String}
    },
    esrb_rating: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return ['Everyone', 'Everyone 10+', 'Teen', 'Mature', 'Adults Only','test'].includes(value);
            },// import from data
            message: validValuesMessage +'Everyone, Everyone 10+, Teen, Mature, Adults Only.',
        },
    },//required-----------------------------------------------------------------
    platformsAndStores: { // the game is avilebel in ... 
        type: Array,
        validate: {
            validator: (val)=> arrayCheckModuleValidation('getPlatformsByName', val , platformsModule,), // if object Add
            message:validValuesMessage+theValidValues('getAllPlatforms'),
        }, // getAllplatform and check the name if it not one of them add it
    },// choices from all platformsAndStores if its not err,
    developers: {
        type: Array,
        validate: {
            validator: (val)=> arrayCheckModuleValidation('getDeveloperByName',val,DeveloperModule),
            message:validValuesMessage+ theValidValues('getAllDeveloper'),
        },
    },// choices from all developers if its not Add,
    genres: {
        type: Array,
        validate: {
            validator: (val)=> arrayCheckModuleValidation('getGenreByName', val,genreModule ),
            message:validValuesMessage+theValidValues('getAllGenreNamesAndImage'),
        },
    },// choices from all genres if its not Add
    tags: {
        type: Array,
        validate: {
            validator: (val)=> arrayCheckModuleValidation('getTagByName', val, TagModule),
            message:validValuesMessage+theValidValues('getAllTagNames'),
        },
    },// choices from all tags if its not Add,
    publishers: {
        type: Array,
        validate: {
            validator: (val)=> arrayCheckModuleValidation('getPublishersByName',val,publishersModule),
            message:validValuesMessage+theValidValues('getAllPublishers'),
        },
    },// choices from all publishers if its not Add,,
});

const GameModule = mongoose.model('GamesData', GameDataSchema);

module.exports = GameModule;

