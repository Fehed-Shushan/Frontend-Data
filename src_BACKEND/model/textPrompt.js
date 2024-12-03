const mongoose = require("mongoose");

const textSchema = new mongoose.Schema(
  {
    textField: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("text", textSchema);
