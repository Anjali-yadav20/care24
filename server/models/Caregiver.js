const mongoose = require('mongoose');

const caregiverSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  serviceAreas: {
    type: [String],
    default: []
  },
  availableDays: {
    type: [String],
    default: []
  },
  startTime: String,
  endTime: String,
  verified: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 0
  },
  reviewsCount: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Caregiver', caregiverSchema);