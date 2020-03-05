const express = require('express');

const Entheogen = require('../models/entheogen');
const User = require('../models/user');

const router = express.Router(); // eslint-disable-line new-cap

// GET /api/entheogen
router.get('/', (req, res) => {
  const currentUser = req.user;

  if (!currentUser) {
    res.send({ err:"Must be logged in" })
  } else {
    Entheogen.find()
      .then(entheogens => {
        res.send({ entheogens, currentUser });
      })
      .catch(err => {
        console.log(err.message);
      });
    }
})

// POST new entheogen.
router.post('/new', (req,res) => {
  if (!req.user) {
    res.send({ err:"Must be logged in" })
  } else {
    const entheogen = new Entheogen(req.body);
    entheogen
    .save()
      .then(function(err, entheogen) {
        res.send('entheogen created');
        })
    .catch(err => {
      console.log(err.message);
    });
  }
});


//GET one entheogen

router.get("/:id", (req, res) => {
  if (!req.user) {
    res.send({ err: 'Must be logged in' })
  } else {
    Entheogen.findById(req.params.id)
      .then(entheogen =>
        res.send({ entheogen }))
      .catch(err => {
        console.log(err.message);
      });
  }
});

// UPDATE one entheogen

router.put("/:id", (req, res) => {
  if (!req.user) {
    res.send({ err: 'Must be logged in' })
  } else {
    Entheogen.findOneAndUpdate(req.params.id)
      .then(entheogen => {
        entheogen.name = req.body.name;
        entheogen.plantSource = req.body.plantSource;
        entheogen.psychoactiveChemical = req.body.psychoactiveChemical;
        entheogen.dosage = req.body.dosage;
        entheogen.healingApplications = req.body.healingApplications
        entheogen.save();
        res.json(entheogen)
      })
      .catch(err => {
        console.log(err.message);
      })
  }
});

router.delete("/:id/delete", (req, res) => {
  if (!req.user) {
    res.send({ err: 'Must be logged in' })
  } else {
    Entheogen.findByIdAndRemove(req.params.id)
      .then(function(err, entheogen) {
        res.send('entheogen deleted');
        })
    .catch(err => {
      console.log(err.message);
    });
  }
});

module.exports = router;
