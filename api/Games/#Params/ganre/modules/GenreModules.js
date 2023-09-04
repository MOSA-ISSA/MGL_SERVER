const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const GenreSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    slug: { type: String, slug: "name" },
    image_background: { type: String },// what if I Can connect To AI and Acording to name will Creat Image and Image will change evrey time
});

// GenreSchema.pre('validate', function (next) {
//     if (!this.slug && this.name) {
//       this.slug = this.name.toLowerCase().replace(/\s+/g, '-');
//     }
//     next();
// });
  

const genreModule = mongoose.model('Genre', GenreSchema);

module.exports = genreModule;
