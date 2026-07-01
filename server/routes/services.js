const express = require('express');
const router = express.Router();
const { getServices, addService } = require('../controllers/serviceController');
const { protect, authorizeRole } = require('../middleware/auth');

// any logged in user can view services
router.get('/', protect, getServices);

// only admin can add services
router.post('/', protect, authorizeRole('admin'), addService);

module.exports = router;