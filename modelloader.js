//load all files in models dir
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
