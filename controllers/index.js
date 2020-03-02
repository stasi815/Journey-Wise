const express = require('express');
const entheogenRoutes = require('./entheogens');
const authRoutes = require('./auth');

const router = express.Router(); // eslint-disable-line new-cap

// all routes for accessing resource
router.use('/entheogens', entheogenRoutes);

// all routes for auth
router.use('/auth', authRoutes);

module.exports = router;
