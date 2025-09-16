const mongoose = require("mongoose");

const storySchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true },
    storyText: { type: String, required: true },
    courseName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SuccessStory", storySchema);
