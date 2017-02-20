const express      = require('express');
const logger       = require('morgan');
const bodyParser   = require('body-parser');
// var homeController = require('./controllers/homeController')

//Set up express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

//Set up template engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('./public'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Default catch-all  route with welcome message
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of Nerd Bay.'
}));

//Fire Controllers
// homeController(app);

app.listen(3000);
console.log('Listening to port 3000...')
module.exports = app;