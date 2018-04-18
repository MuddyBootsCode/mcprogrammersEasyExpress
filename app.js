var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.listen('8000', () => {
  console.log('Server Listening on Port 8000');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/', function(req, res) {
  res.render('home');
});


app.get('*', function(req, res) {
  res.render('error');
});

