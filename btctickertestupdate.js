//btcticker looped
var lol2;
var lol3;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var fs = require ('fs');
var EventEmitter = require('events')
const request = require('request')
mongoose.Promise = require('bluebird');

//PORTMAN ADD-ON (START)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
//PORTMAN ADD-ON (END)

// mongoose connection (START)
var promise = mongoose.connect('mongodb://localhost/example', {
  useMongoClient: true,
  /* other options */
});
promise.then(function(db) {
  /* Use `db`, for instance `db.model()`
});
// Or, if you already have a connection
connection.openUri('mongodb://localhost/myapp', { /* options */ });
// mongoose connection (END)

//VIEW ENGINE EJS (START)
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('./btctickertestupdate',{upbtcticker:lol2}))
  .listen(PORT, () => console.log(`EJS displayed at port ${ PORT }`))
//VIEW ENGINE EJS (END)



//models
var Book = require('./models/Book.model');
var Coin = require('./models/Coin.model');
//REQUIREMENTS (END)

//looped getbtcticker
var getbtcticker = function(){request.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/',
  function(error,response, body) {
    var btcticker = (body);
    lol1 = btcticker
    fs.writeFileSync('cmc.json', lol1, finished);
      function finished(err){
      }
})}


var interval = setInterval(getbtcticker, 10000)
//HTTP request BTCTICKER (END)

fs.readFile('./cmc.json', 'utf8', function(error, data) {
  var lol2 = (data);
  var lol2 = data.replace('[','').replace(']','');
  console.log(lol2);
})
lol3 = bodyParser(lol2)
Coin.findByIdAndUpdate("5a34b7c60c162c5ea0601337",
lol3
      , {}, function(newCoin){
    console.log(newCoin);
  });

  //PORTS (START)
    //WEBSITE PORT
  var PORT = process.env.PORT || 5000
    //SERVER PORT
  var port = 8080;
  //PORTS (END)
