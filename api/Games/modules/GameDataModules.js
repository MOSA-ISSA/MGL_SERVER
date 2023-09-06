const mongoose = require('mongoose');
const { LinkValidtion, arrayLinkValidtion } = require('../../validtion/validtion');

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
        }, // image link or value shude improve
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
    platformsAndStores: {type: String,},// choices from all platformsAndStores if its not err,
    developers: {type: String,},// choices from all developers if its not Add,
    genres: {type: String,},// choices from all genres if its not Add
    tags: {type: String,},// choices from all tags if its not Add,
    publishers: {type: String,},// choices from all publishers if its not Add,,
});

const GameModule = mongoose.model('GameData', GameDataSchema);

module.exports = GameModule;

