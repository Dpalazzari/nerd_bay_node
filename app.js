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

// Default Home Page
app.get('/', function(req, res){
  res.render('home');
  console.log("Home page");
});
app.get('/about', function(req, res){
  res.render('about');
  console.log("About page");
});

//Fire Controllers
// homeController(app);

app.listen(3000);
console.log('Listening to port 3000...')
module.exports = app;