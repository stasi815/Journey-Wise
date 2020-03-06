const express = require('express');

const Entheogen = require('../models/entheogen');
const User = require('../models/user');
const Tribe = require('../models/tribe')

const router = express.Router(); // eslint-disable-line new-cap

// GET /api/tribe
router.get('/', (req, res) => {
  const currentUser = req.user;

  if (!currentUser) {
    res.send({ err:"Must be logged in" })
  } else {
    Tribe.find()
      .then(tribes => {
        res.send({ tribes, currentUser });
      })
      .catch(err => {
        console.log(err.message);
      });
    }
})

// POST new tribe.
router.post('/entheogens/:entheogenID/tribe', (req,res) => {
  if (!req.user) {
    res.send({ err:"Must be logged in" })
  } else {
    const tribe = new Tribe(req.body);
    tribe
    .save()
      .then(function(err, tribe) {
        res.send('tribe created');
        })
    .catch(err => {
      console.log(err.message);
    });
  }
});


//GET one tribe

router.get("/:id", (req, res) => {
  if (!req.user) {
    res.send({ err: 'Must be logged in' })
  } else {
    Tribe.findById(req.params.id)
      .then(tribe =>
        res.send({ tribe }))
      .catch(err => {
        console.log(err.message);
      });
  }
});

// UPDATE one tribe

router.put("/:id", (req, res) => {
  if (!req.user) {
    res.send({ err: 'Must be logged in' })
  } else {
    Tribe.findOneAndUpdate(req.params.id)
      .then(tribe => {
        tribe.name = req.body.name;
        tribe.region = req.body.region;
        tribe.save();
        res.json(tribe)
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
    Tribe.findByIdAndRemove(req.params.id)
      .then(function(err, tribe) {
        res.send('tribe deleted');
        })
    .catch(err => {
      console.log(err.message);
    });
  }
});

module.exports = router;