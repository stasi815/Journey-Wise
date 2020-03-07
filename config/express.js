const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../controllers');

// Auth requirements
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const util = require('util');

// Routes
const router = require('../controllers/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());


const checkAuth = (req, res, next) => {
    console.log("---------")
    console.log(req.headers.token);
    console.log("Checking authentication");
    // first checks if there's a token stored in the body and/or query
    if (typeof req.headers.token === "undefined" || req.headers.token === null)  {
      // console.log(req.headers.token);
      req.user = null;
      } else {
        console.log("accepted", req.headers.token);
        const token = req.headers.token;
        const decodedToken = jwt.decode(token, { complete: true }) || {};
        req.user = decodedToken.payload;
      }
    // callback to what was supposed to happen before each route is called; middleware; says, this piece of middleware is finished so you can move on; wouldn't run the next route without this piece; makes it so that we don't go on until that asynchronous process is finished
      next();
  };

app.use(checkAuth);

// Routes
app.use('/', router);


module.exports = app;