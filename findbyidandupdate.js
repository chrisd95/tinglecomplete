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


Coin.findByIdAndUpdate("5a34b7c60c162c5ea0601337",
  {
      "id": "bitcoin",
      "name": "Bitcoin",
      "symbol": "BTC",
      "rank": "1",
      "price_usd": "90909",
      "price_btc": "1.0",
      "24h_volume_usd": "14404400000.0",
      "market_cap_usd": "331053789610",
      "available_supply": "16746700.0",
      "total_supply": "16746700.0",
      "max_supply": "21000000.0",
      "percent_change_1h": "1.32",
      "percent_change_24h": "10.38",
      "percent_change_7d": "42.76",
      "last_updated": "1513495754"
  }
      , {}, function(newCoin){
    console.log(newCoin);
  });
