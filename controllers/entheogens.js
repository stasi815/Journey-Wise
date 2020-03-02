const express = require('express');

const Entheogen = require('../models/entheogen');

const router = express.Router(); // eslint-disable-line new-cap

// GET /api/entheogen
router.get('/', (req, res) => {
  if (!req.user) {
    res.send({ err:"Must be logged in" })
  } else {
    Entheogen.find()
    .then(entheogens => {
      res.send({ entheogens });
    }).catch(err => {
      console.log(err.message);
    });
  }
})

// router.get('/create_form', (req, res) => {
//   res.send(`
//     <form action='create' method='post'>
//       Entheogen Name: <input type='text' name='entheogenName'>
//       <br>Plant Source: <input type='text' name='plantSource'>
//       <br>Psychoactive chemical: <input type='text' name='psychoactiveChemical'>
//       <br>Dosage: <input type='text' name='dosage'>
//       <br>Healing Applications: <input type='text' name='healingApplications'>
//       <br><input type='submit' value='Submit!'>
//     </form>
//   `)
// })

// POST new entheogen.
router.post('/', (req,res) => {
  if (!req.user) {
    res.send({ err:"Must be logged in" })
  } else {
    const entheogen = new Entheogen(req.body);
    entheogen.save();
    res.send('entheogen created');
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
module.exports = router;
