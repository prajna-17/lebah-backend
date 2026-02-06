const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    superCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SuperCategory",
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Category", categorySchema);
