const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const { LinkValidtion } = require('../../../../validtion/validtion');

mongoose.plugin(slug);

const PlatformsSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    slug: { type: String, slug: "name" },
    image_background: { type: String },// what if I Can connect To AI and Acording to name will Creat Image and Image will change evrey time
    url:{
        type: String,
        validate: {
            validator: (val)=> LinkValidtion(val),
            message: 'link not valid',
        },
    }
});
  

const platformsModule = mongoose.model('platforms', PlatformsSchema);

module.exports = platformsModule;
