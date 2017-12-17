var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var users = require('./models/users.model')


var db = 'mongodb://localhost/testserver';

mongoose.connect(db);


var port = 8080;

app.listen(port,function(){
    console.log('app listening on port' + port);
})
