const DeveloperSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true },
    games_count: { type: Number },
    image_background: { type: String },
});