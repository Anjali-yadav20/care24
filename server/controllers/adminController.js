const User = require('../models/User');
const Caregiver = require('../models/Caregiver');
const Booking = require('../models/Booking');

// get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update user status
const updateUserStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User status updated', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all pending caregivers for verification
const getPendingCaregivers = async (req, res) => {
  try {
    const caregivers = await Caregiver.find({ verified: false })
      .populate('user', 'name email phone');

    res.status(200).json({ caregivers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// verify or reject a caregiver
const verifyCaregiver = async (req, res) => {
  try {
    const { verified } = req.body;

    const caregiver = await Caregiver.findByIdAndUpdate(
      req.params.id,
      { verified },
      { new: true }
    );

    if (!caregiver) {
      return res.status(404).json({ message: 'Caregiver not found' });
    }

    res.status(200).json({
      message: `Caregiver ${verified ? 'approved' : 'rejected'}`,
      caregiver
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get analytics
const getAnalytics = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: 'user' });
    const totalCaregivers = await Caregiver.countDocuments({ verified: true });
    const totalBookings = await Booking.countDocuments();
    const completedBookings = await Booking.countDocuments({ status: 'Completed' });

    const completionRate = totalBookings > 0
      ? ((completedBookings / totalBookings) * 100).toFixed(1)
      : 0;

    res.status(200).json({
      totalUsers,
      totalCaregivers,
      totalBookings,
      completedBookings,
      completionRate: `${completionRate}%`
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  updateUserStatus,
  getPendingCaregivers,
  verifyCaregiver,
  getAnalytics
};