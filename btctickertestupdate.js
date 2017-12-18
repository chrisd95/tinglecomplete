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
var name;
var symbol;
var rank;
var price_usd;
var price_btc;
var h24_volume_us
var market_cap_usd;
var available_supply;
var total_supply;
var max_supply;
var percent_change_1h;
var percent_change_24h;
var percent_change_7d;
var last_updated;
//REQUIREMENTS (END)

//looped getbtcticker
var getbtcticker = function(){request.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/',
  function(error,response, body) {
    var btcticker = (body);
    //var json = JSON.parse(btcticker);
    var parsedData = JSON.parse(btcticker);
    id=parsedData[0].id;
    name = parsedData[0].name;
    symbol = parsedData[0].symbol;
    rank = parsedData[0].rank;
    price_usd = parsedData[0].price_usd;
    price_btc= parsedData[0].price_btc;
    h24_volume_us = parsedData[0]["24h_volume_usd"];
    market_cap_usd = parsedData[0].market_cap_usd;
    available_supply= parsedData[0].available_supply;
    total_supply = parsedData[0].total_supply;
    max_supply = parsedData[0].max_supply;
    percent_change_1h = parsedData[0].percent_change_1h;
    percent_change_24h = parsedData[0].percent_change_24h;
    percent_change_7d = parsedData[0].percent_change_7d;
    last_updated= parsedData[0].last_updated;
    console.log(price_usd);


    //console.log(price_usd);
    //var lol1 = new Array();
    // lol1=btcticker;
     //var myJSON = JSON.stringify(btcticker);
    // var arr = Object.values(btcticker);
     //var parsed = JSON.parse(arr);
     //var loudScreaming = btcticker.getJSONObject(btcticker).getString("name");
    //fs.writeFileSync('cmc.json', btcticker, finished);
      function finished(err){
      }
})}

var interval = setInterval(getbtcticker, 10000)
//HTTP request BTCTICKER (END)



Coin.findByIdAndUpdate("5a37e67f7e0399582df0b9b0",
  {
      "id": "bitcoin",
      "name": name,
      "symbol":symbol,
      "rank": rank,
      "price_usd": price_usd,
      "price_btc": price_btc,
      "24h_volume_usd": h24_volume_us,
      "market_cap_usd": market_cap_usd,
      "available_supply": available_supply,
      "total_supply": total_supply,
      "max_supply": max_supply,
      "percent_change_1h": percent_change_1h,
      "percent_change_24h": percent_change_24h,
      "percent_change_7d": percent_change_7d,
      "last_updated": last_updated
  }
      , {}, function(newCoin){
    console.log(newCoin);
  });
