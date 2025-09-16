const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: String,
  price: { type: Number, default: 0 },
  instructor: { type: String, required: true },
  category: {type: String , required: true},
  thumbnailImage: String,
  isPopular: { type: Boolean, default: false },
  enrollCount: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
