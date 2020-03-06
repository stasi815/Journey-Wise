const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../controllers');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


module.exports = app;
