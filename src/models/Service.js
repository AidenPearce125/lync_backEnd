const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  ratePerHour: { type: Number, required: true },
  available: { type: Boolean, default: true },
  address: String,
  description: String,
  daysAvailable: [String],
  startTime: String,
  endTime: String
}, { timestamps: true });
module.exports = mongoose.model('Service', schema);
