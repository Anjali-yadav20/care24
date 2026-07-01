const Patient = require('../models/Patient');

// create or update patient profile
const savePatientProfile = async (req, res) => {
  try {
    const { name, age, medicalNeeds, emergencyContact, address } = req.body;

    // req.user.id comes from our auth middleware
    // it tells us which logged in user is making this request
    const existingPatient = await Patient.findOne({ user: req.user.id });

    if (existingPatient) {
      // if profile already exists, update it
      const updated = await Patient.findOneAndUpdate(
        { user: req.user.id },
        { name, age, medicalNeeds, emergencyContact, address },
        { new: true }
      );
      return res.status(200).json({ 
        message: 'Patient profile updated', 
        patient: updated 
      });
    }

    // if no profile exists, create a new one
    const patient = await Patient.create({
      user: req.user.id,
      name,
      age,
      medicalNeeds,
      emergencyContact,
      address
    });

    res.status(201).json({ 
      message: 'Patient profile created', 
      patient 
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get patient profile for logged in user
const getPatientProfile = async (req, res) => {
  try {
    const patient = await Patient.findOne({ user: req.user.id });

    if (!patient) {
      return res.status(404).json({ message: 'Patient profile not found' });
    }

    res.status(200).json({ patient });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { savePatientProfile, getPatientProfile };