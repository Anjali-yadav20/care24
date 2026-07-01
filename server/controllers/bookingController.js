const Booking = require('../models/Booking');
const CareNote = require('../models/CareNote');

// user creates a new booking
const createBooking = async (req, res) => {
  try {
    const { caregiverId, serviceId, bookingType, date, time, notes } = req.body;

    const booking = await Booking.create({
      user: req.user.id,
      caregiver: caregiverId,
      service: serviceId,
      bookingType,
      date,
      time,
      notes,
      status: 'Pending'
    });

    res.status(201).json({ message: 'Booking created', booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// user gets their own bookings
const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate('caregiver', 'qualification')
      .populate('service', 'name price');

    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// caregiver gets their incoming requests
const getCaregiverBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ caregiver: req.user.id })
      .populate('user', 'name phone')
      .populate('service', 'name price');

    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// caregiver accepts or rejects a booking
const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({ message: 'Booking status updated', booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// caregiver adds a care note to a booking
const addCareNote = async (req, res) => {
  try {
    const { note } = req.body;

    const careNote = await CareNote.create({
      booking: req.params.id,
      note
    });

    res.status(201).json({ message: 'Care note added', careNote });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// user gets care notes for a booking
const getCareNotes = async (req, res) => {
  try {
    const notes = await CareNote.find({ booking: req.params.id });
    res.status(200).json({ notes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBooking,
  getUserBookings,
  getCaregiverBookings,
  updateBookingStatus,
  addCareNote,
  getCareNotes
};