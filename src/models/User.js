const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: String,
  verified: { type: Boolean, default: false },
  fullName: String,
  dob: Date,
  about: String,
  university: String,
  major: String,
  graduationYear: Number,
  image: String,
  interests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Interest' }],
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
