const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  title: String,
  city: String,
  locality: String,
  price: Number,
  type: { type: String, enum: ['buy', 'rent'] },
  verified: { type: Boolean, default: false },
  images: [String],
  ownerVerified: Boolean,
  lastVerified: Date
}, { timestamps: true });

module.exports = mongoose.model('Property', PropertySchema);
