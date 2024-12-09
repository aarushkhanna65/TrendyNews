const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: { type: String, required: true },
});

// Add a virtual `id` field that maps to `_id`
CategorySchema.virtual("id").get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are included when converting documents to JSON
CategorySchema.set("toJSON", { virtuals: true });
CategorySchema.set("toObject", { virtuals: true });

// Export model
module.exports = mongoose.model("Category", CategorySchema);
