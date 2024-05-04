const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: Object,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      // required: true,
    },
    nextEarningDate: {
      type: Date,
      default: () =>
        new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1), //default to the first day of the next month
    },
    thisMonthEarnings: { type: Number, default: 0 },
    totalEarning: { type: Number, default: 0 },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    viewCount: [{ type: Number, default: 0 }],
    like: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    disLike: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    isBloked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
