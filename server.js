require('dotenv').config();

const port = process.env.PORT

// App Setup
const app = require('./config/express');

// Set db
require('./data/journey-wise-db');

// Start Server
app.listen(process.env.PORT, () => {
  console.info(`server started on port ${process.env.PORT} (${process.env.NODE_ENV})`); // eslint-disable-line no-console
});

module.exports = app;
