const express = require('express');
const entheogenRoutes = require('./entheogens');
const authRoutes = require('./auth');
const tribeRoutes = require('./tribes');

const router = express.Router(); // eslint-disable-line new-cap

// all routes for accessing entheogen resource
router.use('/entheogens', entheogenRoutes);

// all routes for auth
router.use('/auth', authRoutes);

// all routes for tribes
router.use('/entheogens/:entheogenID/tribe', function(req, res, next) {
    req.entheogenID = req.params.entheogenID;
    next()
}, tribeRoutes);


module.exports = router;
