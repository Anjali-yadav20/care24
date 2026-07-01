const express = require('express');
const router = express.Router();
const { savePatientProfile, getPatientProfile } = require('../controllers/userController');
const { protect, authorizeRole } = require('../middleware/auth');

// POST /api/users/patient — save patient profile (only logged in users)
router.post('/patient', protect, authorizeRole('user'), savePatientProfile);

// GET /api/users/patient — get patient profile (only logged in users)
router.get('/patient', protect, authorizeRole('user'), getPatientProfile);

module.exports = router;