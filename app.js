var express = require('express');
var reload = require('reload');
var http = require('http');
var app = express();
app.set('view engine', 'ejs');

const port = 8000;


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

var server = http.createServer(app);

reload(app);

server.listen(app.get(port), function(){
  console.log('Server listening on port 8000');
});