const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router(); // eslint-disable-line new-cap

const User = require("../models/user");

// SIGN UP
router.post('/sign-up', (req, res) => {
    // Create User
    const user = new User(req.body);
    user
        .save()
        .then(user => {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "60 days" });
        // res.cookie('jwttoken', token, { maxAge: 900000, httpOnly: true });
        res.json({'token': token})
        })
        .catch(err => {
            console.log(err.message);
            return res.status(400).send({ err: err });
        });
});

// LOGIN
router.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    // Find this user name
    User.findOne({ username }, "username password")
        .then(user => {
        console.log(user)
        if (!user) {
            // User not found
            return res.status(401).send({ message: "Wrong Username or Password" });
        }
    // Check the password
    user
        .comparePassword(password, (err, isMatch) => {
            if (!isMatch) {
                // Password does not match
                return res.status(401)
                .send({ message: "Wrong Username or password" });
            }

            // Create a token
            const token = jwt.sign({ _id: user._id, username: user.username }, process.env.JWT_SECRET, {
                expiresIn: "60 days"
            });

            // Set a cookie and response
            // res.cookie("jwttoken", token, { maxAge: 900000, httpOnly: true });
            res.json({'token': token})
        });
    })
        .catch(err => {
            console.log(err.message);
        });
    });

// Logout
router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = router;
