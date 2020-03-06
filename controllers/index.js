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
entheogenRoutes.use('./:entheogenID/tribe', function(req, res, next) {
    req.entheogenID = req.params.entheogenID;
}, tribeRoutes);

tribeRoutes.get('/:tribeID/', function(req, res, next) {
    let entheogenID = req.entheogenID;
    let tribeID = req.params.tribeID;

    return res.send(`Entheogen ${entheogenID} and tribe ${tribeID}`);
})

module.exports = router;
