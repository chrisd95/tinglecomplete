const mongoose = require('mongoose');

// Connect to mongodb

mongoose.connect('mongodb://heroku_k7s1m7j5:hb0ccn75stq24lirfft384tsu1@ds137686.mlab.com:37686/heroku_k7s1m7j5');

mongoose.connection.once('open', function(){
  console.log('Connection has been made.');
}).on('error', function(error){
  console.log('Connection error', error);
});
