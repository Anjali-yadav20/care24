const mongoose = require('mongoose');

const careNoteSchema = new mongoose.Schema({
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
    required: true
  },
  note: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('CareNote', careNoteSchema);