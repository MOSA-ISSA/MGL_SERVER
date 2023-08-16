const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true },
    image_background: { type: String },
});

const genreModule = mongoose.model('Genre', GenreSchema);

module.exports = genreModule;
