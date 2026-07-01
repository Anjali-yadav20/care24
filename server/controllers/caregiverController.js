const Caregiver = require('../models/Caregiver');
const User = require('../models/User');

// get all verified caregivers - for users to browse
const getCaregivers = async (req, res) => {
  try {
    const caregivers = await Caregiver.find({ verified: true })
      .populate('user', 'name email phone');

    res.status(200).json({ caregivers });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get single caregiver by id
const getCaregiverById = async (req, res) => {
  try {
    const caregiver = await Caregiver.findById(req.params.id)
      .populate('user', 'name email phone');

    if (!caregiver) {
      return res.status(404).json({ message: 'Caregiver not found' });
    }

    res.status(200).json({ caregiver });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update caregiver availability and service areas
const updateAvailability = async (req, res) => {
  try {
    const { availableDays, startTime, endTime, serviceAreas } = req.body;

    const caregiver = await Caregiver.findOneAndUpdate(
      { user: req.user.id },
      { availableDays, startTime, endTime, serviceAreas },
      { new: true }
    );

    if (!caregiver) {
      return res.status(404).json({ message: 'Caregiver profile not found' });
    }

    res.status(200).json({ 
      message: 'Availability updated successfully', 
      caregiver 
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get caregiver profile for logged in caregiver
const getCaregiverProfile = async (req, res) => {
  try {
    const caregiver = await Caregiver.findOne({ user: req.user.id })
      .populate('user', 'name email phone');

    if (!caregiver) {
      return res.status(404).json({ message: 'Caregiver profile not found' });
    }

    res.status(200).json({ caregiver });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// admin - get all caregivers pending verification
const getPendingCaregivers = async (req, res) => {
  try {
    const caregivers = await Caregiver.find({ verified: false })
      .populate('user', 'name email phone');

    res.status(200).json({ caregivers });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// admin - verify or reject a caregiver
const verifyCaregiverById = async (req, res) => {
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
      message: `Caregiver ${verified ? 'approved' : 'rejected'} successfully`,
      caregiver 
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCaregivers,
  getCaregiverById,
  updateAvailability,
  getCaregiverProfile,
  getPendingCaregivers,
  verifyCaregiverById
};