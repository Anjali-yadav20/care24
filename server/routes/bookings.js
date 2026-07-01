const express = require('express');
const router = express.Router();
const {
  createBooking,
  getUserBookings,
  getCaregiverBookings,
  updateBookingStatus,
  addCareNote,
  getCareNotes
} = require('../controllers/bookingController');
const { protect, authorizeRole } = require('../middleware/auth');

// user creates a booking
router.post('/', protect, authorizeRole('user'), createBooking);

// user gets their bookings
router.get('/user', protect, authorizeRole('user'), getUserBookings);

// caregiver gets their bookings
router.get('/caregiver', protect, authorizeRole('caregiver'), getCaregiverBookings);

// caregiver updates booking status
router.put('/:id/status', protect, authorizeRole('caregiver'), updateBookingStatus);

// caregiver adds care note
router.post('/:id/note', protect, authorizeRole('caregiver'), addCareNote);

// user gets care notes
router.get('/:id/notes', protect, authorizeRole('user'), getCareNotes);

module.exports = router;