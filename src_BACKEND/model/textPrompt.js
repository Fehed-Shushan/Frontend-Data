const mongoose = require("mongoose");

const textSchema = new mongoose.Schema(
  {
    TextNameField: { type: String, required: true},
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("text", textSchema);
