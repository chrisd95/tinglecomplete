var express = require('express');

var app = express();

app.get('/', function(req, resp){
  resp.cookie('myFirstCookie', 'looks Good');
  resp.end('Wow');
});

app.listen(1337, function(){
  console.log('Yeah?');
});
