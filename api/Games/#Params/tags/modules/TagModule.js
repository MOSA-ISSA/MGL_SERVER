const TagSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true },
});