//btcticker looped
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



//models
var Book = require('./models/Book.model');
var Coin = require('./models/Coin.model');
//REQUIREMENTS (END)

//looped getbtcticker
var getbtcticker = function(){request.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/',
  function(error,response, body) {
    var btcticker = (body);
    
    fs.writeFileSync('cmc.json', btcticker, finished);
      function finished(err){
      }
})}
var btcticker = JSON.parse(fs.readFileSync('cmc.json', 'utf8'));
var map = new Map(Object.entries(btcticker));

var mapContent = map.get("0");
var arr3= Object.values(mapContent);



var interval = setInterval(getbtcticker, 10000)
//HTTP request BTCTICKER (END)



Coin.findByIdAndUpdate("5a3afea97e0399582df0b9ba",
{
  "id": arr3[0], 
  "name": arr3[1], 
  "symbol": arr3[2], 
  "rank": arr3[3], 
  "price_usd": arr3[4], 
  "price_btc": arr3[5], 
  "24h_volume_usd": arr3[6], 
  "market_cap_usd": arr3[7], 
  "available_supply": arr3[8], 
  "total_supply": arr3[9], 
  "max_supply": arr3[10], 
  "percent_change_1h": arr3[11], 
  "percent_change_24h": arr3[12], 
  "percent_change_7d": arr3[13], 
  "last_updated": arr3[14]
}
      , {}, function(newCoin){
    console.log(newCoin);
  });

  //PORTS (START)
    //WEBSITE PORT
  var PORT = process.env.PORT || 5000
    //SERVER PORT
  var port = 8080;
  //PORTS (END)

  