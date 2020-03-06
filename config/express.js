const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../controllers');
// const expressValidator = require('express-validator');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add after body parser initialization!
// app.use(expressValidator());

module.exports = app;
