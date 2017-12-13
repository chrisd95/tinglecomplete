const mongoose = require('mongoose');

// Connect to mongodb

mongoose.connect('mongodb://localhost/testserver');

mongoose.connection.once('open', function(){
  console.log('Local connection has been made.');
}).on('error', function(error){
  console.log('Connection error', error);
});
