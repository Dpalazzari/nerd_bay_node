const express      = require('express');
const logger       = require('morgan');
const bodyParser   = require('body-parser');
var session        = require('express-session');
var passport       = require('passport');
var FacebookStrategy  = require('passport-facebook');
// var homeController = require('./controllers/homeController')

//Set up express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

//Set up template engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('./public'));

// Set middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  secret: 'facebook_nerd_bay',
  resave: true,
  saveUninitialized: true
}));

// Default Home Page
app.get('/', function(req, res){
  res.render('home');
  console.log("Home page");
});
app.get('/about', function(req, res){
  res.render('about');
  console.log("About page");
});

var FACEBOOK_APP_ID = '';
var FACEBOOK_SECRET = '';
passport.use(new FacebookStrategy({

}));

app.get('/facebook_login', function(req, res){

});

//Fire Controllers
// homeController(app);

app.listen(3000);
console.log('Listening to port 3000...')
module.exports = app;