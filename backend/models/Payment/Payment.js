const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reference: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
    subscriptionPlan: {
      //use object Id
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    monthlyRequestCount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.export = mongoose.Schema("Payment", paymentSchema);
