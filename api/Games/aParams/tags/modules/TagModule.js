const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const TagSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    slug: { type: String, slug: "name" },
});

const TagModule = mongoose.model('Tag', TagSchema);

module.exports = TagModule;