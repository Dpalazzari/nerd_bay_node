require('dotenv').config()
var User              = require('./server/models/user');
var express           = require('express');
var bodyParser        = require('body-parser');
var session           = require('express-session');
var passport          = require('passport');
var FacebookStrategy  = require('passport-facebook');

//Set up express app
var app = express();

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
app.get('/profile', function(req, res){
  res.render('profile');
  console.log("Profile page");
});

// var fbCallback = function(accessToken, refreshToken, profile, cb){
//   console.log(accessToken, refreshToken, profile);
// };

// passport.use(new FacebookStrategy({
//   clientID: process.env.FACEBOOK_APP_ID,
//   clientSecret: process.env.FACEBOOK_APP_SECRET,
//   callbackURL: 'http://localhost:3000/auth/facebook/callback',
//   profileFields: ['emails']
// }));

// app.get('/auth/facebook', passport.authenticate('facebook', { 
//     scope: ['email']
//   },
//   function(accessToken, refreshToken, profile, done){
//     process.nextTick(function(){
//       // Have to save postgres user here
//       // User.findOne({'facebook.id': profile.id}, function(err, user){
//         if(err)
//           return done(err);
//         if(user)
//           return done(null, user);
//         else {
//           var newUser = new User();
//           newUser.facebook.id = profile.id;
//           newUser.facebook.token = accessToken
//           newUser.facebook.username = profile.username
//         }
//       });
//     });
//   }
//   ));

// app.get('/auth/facebook/callback', passport.authenticate('facebook', {
//   successRedirect: '/profile',
//   failureRedirect: '/'  
// }));

app.listen(3000);
console.log('Listening to port 3000...');
console.log(process.env.FACEBOOK_APP_ID);
console.log(process.env.FACEBOOK_APP_SECRET);
module.exports = app;