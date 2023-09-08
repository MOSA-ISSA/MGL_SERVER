const mongoose = require('mongoose');
const { LinkValidtion, arrayLinkValidtion, arrayCheckModuleValidation, theValidValues, CheckModuleValidation,  } = require('../../validtion/validtion');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

// Define the main GameDataSchema
const GameDataSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    slug: { type: String, slug: "name" },
    name: { type: String, required: true },
    short_name: { type: String,},
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
        // validate: {
        //     validator: (val)=> LinkValidtion(val),
        //     message: 'link not valid',
        // }, // image link or value shude improve
    },
    short_screenshots: {
        type: Array,
        validate: {
            validator: (val)=> arrayLinkValidtion(val),
            message: 'link not valid',
        },// image link or value shude improve
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
    platformsAndStores: { // the game is avilebel in ... 
        type: String,
        validate: {
            validator: (val)=> arrayCheckModuleValidation('getPlatformsByName', val), // if object Add
            message: 'the valid Platforms are '+theValidValues('getAllPlatforms'),
        }, // getAllplatform and check the name if it not one of them add it
    },// choices from all platformsAndStores if its not err,
    developers: {
        type: String,
        validate: {
            validator: (val)=> CheckModuleValidation('getDeveloperByName',val),
            message: 'the valid Platforms are '+theValidValues('getAllDeveloper'),
        },
    },// choices from all developers if its not Add,
    genres: {
        type: String,
        validate: {
            validator: (val)=> arrayCheckModuleValidation('getGenreByName', val),
            message: 'the valid Platforms are '+theValidValues('getAllGenreNamesAndImage'),
        },
    },// choices from all genres if its not Add
    tags: {
        type: String,
        validate: {
            validator: (val)=> arrayCheckModuleValidation('getTagByName', val),
            message: 'the valid Platforms are '+theValidValues('getAllTagNames'),
        },
    },// choices from all tags if its not Add,
    publishers: {
        type: String,
        validate: {
            validator: (val)=> CheckModuleValidation('getPublishersByName',val),
            message: 'the valid Platforms are '+theValidValues('getAllPublishers'),
        },
    },// choices from all publishers if its not Add,,
});

const GameModule = mongoose.model('GameData', GameDataSchema);

module.exports = GameModule;

