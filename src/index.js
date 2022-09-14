const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const morgan = require('morgan');
const hbs  = require('express-handlebars');

const route = require('./routes')
const database = require('./config/database');

var methodOverride = require('method-override');

const session = require('express-session');

const fileupload = require('express-fileupload');
const expressValidator = require('express-validator');


//-------------------------------//
//HTTP logger
//app.use(morgan('combined'));

//Template engine
app.engine('.hbs', hbs.engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public')));


// Connect database
database.connect();


//Parsing (req.body) string, json 
app.use(express.urlencoded({
  extended: true,
}));

app.use(express.json());

// Express Validator
app.use(expressValidator({
  customValidators: {
    isImage: function(value, filename) {
      var extension = (path.extname(filename)).toLowerCase();
      switch(extension) {
        case '.jpg':
          return '.jpg';
        case '.jpeg':
          return '.jpeg';
        case '.png':
          return '.png';
        case '':
          return '.jpg';
        default:
          return false;
      }
    }
  }
}));


//session express
app.use(session({secret: 'mySecret', resave: false, saveUninitialized: false}));

//Method HTTP: PUT/PATCH, DELETE for <form></form> tag
//syntax: ?_method=DELETE/PUT/PATCH
app.use(methodOverride('_method'));
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})