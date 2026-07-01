const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  updateUserStatus,
  getPendingCaregivers,
  verifyCaregiver,
  getAnalytics
} = require('../controllers/adminController');
const { protect, authorizeRole } = require('../middleware/auth');

// all admin routes are protected
router.get('/users', protect, authorizeRole('admin'), getAllUsers);
router.put('/users/:id', protect, authorizeRole('admin'), updateUserStatus);
router.get('/caregivers/pending', protect, authorizeRole('admin'), getPendingCaregivers);
router.put('/caregivers/:id/verify', protect, authorizeRole('admin'), verifyCaregiver);
router.get('/analytics', protect, authorizeRole('admin'), getAnalytics);

module.exports = router;