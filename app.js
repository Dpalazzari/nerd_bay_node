const express = require('express');
const logger  = require('morgan');
const bodyParser = require('body-parser');

//Set up express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));


// Pare incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded([ extended: false]));

// Default catch-all  route with welcome message
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of Nerd Bay.'
}));

module.exports = app;