const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: Object,
      default: null,
    },
    email: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    googleId: {
      type: String,
      required: false,
    },
    authMethod: {
      type: String,
      enum: ["google", "local", "facebook", "github"],
      required: true,
      default: "local",
    },
    passwordResetToken: { type: String, default: null },
    accountVerificationToken: { type: String, default: null },
    accountVerificationExpires: { type: Date, default: null },
    accountVerificationToken: { type: String, default: null },
    accountVerificationExpires: { type: Data, default: null },
    accountVerificationExpires: { type: Date, default: null },
    passwordResetExpires: { type: Date, default: null },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    totalEarnings: { type: Number, default: 0 },
    nextEarningDate: {
      Type: Date,
      default: () =>
        new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
    },
    plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    payments: [{ tye: mongoose.Schema.Types.ObjectId, ref: "Payment" }],
    hasSelectedPlan: { type: Boolean, default: false },
    lastLogin: { type: Date, default: Date.now },

    //users relationships
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    //users Others
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
