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

// entheogenRoutes.use('./:entheogenID/', function(req, res, next) {
//     req.entheogenID = req.params.entheogenID;
// }, tribeRoutes);

// tribeRoutes.use('/:tribeID', function(req, res, next) {
//     let entheogenID = req.entheogenID;
//     let tribeID = req.params.tribeID;

//     return res.send(`Entheogen ${entheogenID} and tribe ${tribeID}`);
// })

module.exports = router;
