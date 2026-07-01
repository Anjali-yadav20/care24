const express = require('express');
const router = express.Router();
const {
  getCaregivers,
  getCaregiverById,
  updateAvailability,
  getCaregiverProfile,
  getPendingCaregivers,
  verifyCaregiverById
} = require('../controllers/caregiverController');
const { protect, authorizeRole } = require('../middleware/auth');

// public - any logged in user can browse caregivers
router.get('/', protect, authorizeRole('user'), getCaregivers);

// caregiver - get own profile
router.get('/profile', protect, authorizeRole('caregiver'), getCaregiverProfile);

// caregiver - update availability
router.put('/availability', protect, authorizeRole('caregiver'), updateAvailability);

// admin - get pending caregivers
router.get('/pending', protect, authorizeRole('admin'), getPendingCaregivers);

// admin - verify caregiver
router.put('/verify/:id', protect, authorizeRole('admin'), verifyCaregiverById);

// public - get single caregiver by id
router.get('/:id', protect, getCaregiverById);

module.exports = router;