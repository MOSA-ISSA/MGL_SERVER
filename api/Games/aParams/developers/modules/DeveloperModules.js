const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const DeveloperSchema = new mongoose.Schema({
    id: { type: Number, required: true }, // auto
    name: { type: String, required: true },
    slug: { type: String, slug: "name" },// auto
    image_background: { type: String },
    games_names: [{ type: String }], // shuod add validation or one of chicses or create
    // exp get games or creat
});

const DeveloperModule = mongoose.model('Developer', DeveloperSchema);

module.exports = DeveloperModule;