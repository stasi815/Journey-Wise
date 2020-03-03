const mongoose = require('mongoose');

// Auth requirements
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const util = require('util');

require('dotenv').config();

// Set db
require('./data/journey-wise-db');

const app = require('./config/express');
const router = require('./controllers/index');

app.use(cookieParser());

mongoose.Promise = Promise;

// connect to mongo db
const mongoUri = process.env.MONGO_HOST;
mongoose.connect(
  mongoUri,
  { server: { socketOptions: { keepAlive: 1 } } }
);
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

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

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
// if (!module.parent) {
//   // listen on port config.port
//   app.listen(process.env.PORT, () => {
//     console.info(`server started on port ${process.env.PORT} (${process.env.NODE_ENV})`); // eslint-disable-line no-console
//   });
// }

module.exports = app;

app.listen(3000, () =>
  console.log(`Example app listening on port 3000!`),
);

