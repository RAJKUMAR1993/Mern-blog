const mongoose = require("mongoose");
//Schema
const categorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true },
    description: { type: String },
    post: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  },
  {
    timestamps: true,
  }
);
//Model
module.exports = mongoose.model("Category", categorySchema);
// or
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
