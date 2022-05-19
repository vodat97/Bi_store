const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const morgan = require('morgan');
const hbs  = require('express-handlebars');

const route = require('./routes')
const database = require('./config/database');
//-------------------------------//
//HTTP logger
//app.use(morgan('combined'));

//Template engine
app.engine('.hbs', hbs.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', function(req, res) {
//   res.render('home');
// })

// Connect database
database.connect();

app.use(express.json());
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})