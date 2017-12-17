//REQUIREMENTS (START)
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var fs = require ('fs');
var EventEmitter = require('events')
const request = require('request')
var lol;
var cmcbtcticker;

//mongoose promise bluebird (START)
mongoose.Promise = require('bluebird');
//mongoose promise bluebird (END)

//PORTMAN ADD-ON (START)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
//PORTMAN ADD-ON (END)

//REQUIRE MODELS (START)
var Coin = require('./models/Coin.model');
//REQUIRE MODELS (START)


//PORTS (START)
  //WEBSITE PORT
var PORT = process.env.PORT || 5000
  //SERVER PORT
var port = 8080;
//PORTS (END)

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
  .get('/', (req, res) => res.render('pages/index',{btcticker:lol}))
  .listen(PORT, () => console.log(`EJS displayed at port ${ PORT }`))
//VIEW ENGINE EJS (END)


//SERVER PORT MSG (START)
app.get('/', function(req, res) {
  res.send('happy to be here');
});
//SERVER PORT MSG (END)




//DISPLAY HTTP request BTCTICKER (START)
request.get('http://localhost:8080/coins/5a34b7c60c162c5ea0601337',
  function(error,response, body) {
    var btcticker = (body);
    lol = btcticker
    fs.writeFileSync('cointicker.json', lol, finished);
      function finished(err){
      }
})



//looped getbtcticker
var getbtcticker = function(){request.get('http://localhost:8080/coins/5a34b7c60c162c5ea0601337',
  function(error,response, body) {
    var btcticker = (body);
    lol = btcticker
    fs.writeFileSync('cointicker.json', lol, finished);
      function finished(err){
      }
})}


var interval = setInterval(getbtcticker, 10000)
//HTTP request BTCTICKER (END)


//GET. ALL COINS API (START)
app.get('/coins', function(req, res) {
  console.log('Getting all coins');
  Coin.find({})
    .exec(function(err, coins) {
      if(err) {
        res.send('error occured')
      } else {
        console.log(coins);
        res.json(coins);
      }
    });
});
//GET. ALL COINS API (END)

//GET. SINGLE API (START)
app.get('/coins/:id', function(req, res) {
  console.log('The price of the coin you searched is ');
  Coin.findOne({
    _id: req.params.id
  })
    .exec(function(err, coins) {
      if(err) {
        res.send('error occured')
      } else {
        console.log(coins);
        res.json(coins);
      }
    });
});
//GET. SINGLE API (END)

var upbtcticker = function(){Coin.findByIdAndUpdate("5a34b7c60c162c5ea0601337",
  {
      "id": "bitcoin",
      "name": "Bitcoin",
      "symbol": "BTC",
      "rank": "1",
      "price_usd": "202403402",
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
  });}

  var interval1 = setInterval(upbtcticker, 5000)




//UPDATE COINS (START)
app.put('/coins/:id', function(req, res) {
  Book.findOneAndUpdate({
    _id: req.params.id
    },
    { $set: { title: req.body.title }
  }, {upsert: true}, function(err, newBook) {
    if (err) {
      res.send('error updating ');
    } else {
      console.log(newBook);
      res.send(newBook);
    }
  });
});
//UPDATE COINS (END)




//HTTP request BTCTICKER (START)
request.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/',
  function(error,response, body) {
    var what = (body);
    var cmcbtcticker = what
    fs.writeFileSync('cmc.json', cmcbtcticker, finished);
      function finished(err){
      }
})

// FIND AND UPDATE ONE DOCUMENT (START)
var updatebtcticker = function (){Coin.findOneAndUpdate({
  _id: "5a34b7c60c162c5ea0601337"
  },
  {$set: {cmcbtcticker
      }}
      , {upsert: true}, function(err, newCoin) {
  if (err) {
    res.send('error updating ');
  } else {
    console.log(newCoin);
  }
})};

var interval1 = setInterval(updatebtcticker, 5000)
// FIND AND UPDATE ONE DOCUMENT (START)


//DELETE BOOKS (START)
app.delete('/book/:id', function(req, res) {
  Book.findOneAndRemove({
    _id: req.params.id
  }, function(err, book) {
    if(err) {
      res.send('error removing')
    } else {
      console.log(book);
      res.status(204);
    }
  });
});
//DELETE BOOKS (END)


//LISTEN
app.listen(port, function() {
  console.log('Server displaying on port ' + port);
});
