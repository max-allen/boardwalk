const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
const server = app.listen(PORT, () => { console.log(`Listening on ${PORT}`) })
module.exports = app;

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// api route
app.use('/api', require('./api'))