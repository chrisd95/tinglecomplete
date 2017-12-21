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


//looped getbtcticker
var getbtcticker = function(){request.get('http://localhost:8080/coins/5a3afea97e0399582df0b9ba',
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
        console.log(coins.price_usd);
        res.json(coins.price_usd);
      }
    });
});


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

//bitcoin ticker
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