const mongoose = require("mongoose");

const superCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true }, // Men, Women
  },
  { timestamps: true },
);

module.exports = mongoose.model("SuperCategory", superCategorySchema);
