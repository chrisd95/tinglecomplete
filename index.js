const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var fs = require('fs');
var mongoose = require('mongoose');



var btcticker=16303.34;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index',{btcticker:btcticker}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


  // Connect to mongodb localhost (START) = localconnection.js

  mongoose.connect('mongodb://localhost/data/db/test_1');

  mongoose.connection.once('open', function(){
    console.log('Local connection has been made.');
  }).on('error', function(error){
    console.log('Connection error', error);
  });
  // Connect to mongodb localhost (END) = localconnection.js




//Cookie practice log (START) = cookielog.js
  var app = express();

  app.get('/', function(req, resp){
    resp.cookie('myFirstCookie', 'looks Good');
    resp.end('This is ma server');
  });

  app.listen(1337, function(){
    console.log('Yeah?');
  });
//Cookie practice log (END) = cookielog.js

//load all files in models dir (START) = modelloader.js
fs.readdirSync(__dirname + '/models').forEach(function(filename) {
  if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});


app.get('/users', function(req, res) {
  mongoose.model('users').find(function(err, users) {
    res.send(users);
  });
});

app.get('/posts/:userId', function(req, res) {
  mongoose.model('posts').find({user: req.params.userId}, function(err, posts) {
    mongoose.model('posts').populate(posts, {path: 'user'}, function(err, posts) {
      res.send(posts);
    });
  });
});
//load all files in models dir (END) = modelloader.js
