// Dependencies and requires (START)
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator =  require('express-validator');
var mongojs = require('mongojs');
var fs = require('fs');
var db = mongojs('mongodb://admin:admin@ds163806.mlab.com:63806/tingleclean',['coins']);
var limit10 = require("./limit10.js");
var capi = require("./capi.js");
var request = require('request');
var btctick;
var ethtick;
var bchtick;
var xrptick;
var ltctick;
var adatick;
var dashtick;
var miotatick;
var xemtick;
var btgtick;

//dependencies and requires (END)
var app = express();

//WEBSITE PORT
var PORT = process.env.PORT || 5000
//SERVER PORT
var port = 8080;
//PORTS (END)



// View Engine (START)
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));
app.listen(PORT, () => console.log(`EJS displayed at port ${ PORT }`))
// View Engine (END)



// body-parser Middleware (START)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// body-parser middleware (END)

//REQUIRE MODELS (START)
var Coin = require('./models/Coin.model');
//REQUIRE MODELS (START)

// Global variables
app.use(function(req, res, next){
  res.locals.errors = null;
  next();
});


// Express Validator Middleware(START)
app.use(expressValidator({
  errorFormatter: function(param, msg, value){
    var namespace = param.split('.')
    , root  = namespace.shift()
    , formParam = root;
    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg : msg,
      value : value
    }
  }
}));

// Express Validator Middleware(END)


// Set Static Path (EJS,CSS,jquery,etc.) (START)
app.use(express.static(path.join(__dirname, 'public')))
// Set Static Path (EJS,CSS,jquery,etc.) (END)

// Get ALL coins





var suscribers = [];
var coins;


// Main website GET (START)
app.get('/', function(req, res){
  //render db
  db.coins.find(function (err,docs){
    console.log(docs)
    //render EJS
    res.render('pages/index', {
        //render variables
      title: 'Welcome to Tingle',
      coins: docs,
      suscribers: suscribers,
      btcticker: btctick,
      ethticker: ethtick,
      bchticker: bchtick,
      xrpticker: xrptick,
      ltcticker: ltctick,
      adaticker: adatick,
      dashticker: dashtick,
      miotaticker: miotatick,
      xemticker: xemtick,
      btgticker: btgtick
    });
  });
});
// Main website GET (END)




//GET own API (START)
var getbtcticker = function(){request.get('http://localhost:5000/coins/5a3d7f7cf36d2805ea5111fe',
  function(error,response, body) {
    var btcticker = (body);
    btctick = btcticker
    fs.writeFileSync('btcticker.json', btctick, finished);
      function finished(err){
      }
})};
var interval = setInterval(getbtcticker, 6000)
//
var getethticker = function(){request.get('http://localhost:5000/coins/5a3d7f95f36d2805ea511214',
  function(error,response, body) {
    var ethticker = (body);
    ethtick = ethticker
    fs.writeFileSync('ethticker.json', ethtick, finished);
      function finished(err){
      }
})};
var interval = setInterval(getethticker, 6000)
//
var getbchticker = function(){request.get('http://localhost:5000/coins/5a3d7faff36d2805ea511220',
  function(error,response, body) {
    var bchticker = (body);
    bchtick = bchticker
    fs.writeFileSync('bchticker.json', bchtick, finished);
      function finished(err){
      }
})};
var interval = setInterval(getbchticker, 6000)
//
var getxrpticker = function(){request.get('http://localhost:5000/coins/5a3daa4af36d2805ea5125fa',
  function(error,response, body) {
    var xrpticker = (body);
    xrptick = xrpticker
    fs.writeFileSync('xrpticker.json', xrptick, finished);
      function finished(err){
      }
})};
var interval = setInterval(getxrpticker, 6000)
//
var getltcticker = function(){request.get('http://localhost:5000/coins/5a3daa65f36d2805ea5125ff',
  function(error,response, body) {
    var ltcticker = (body);
    ltctick = ltcticker
    fs.writeFileSync('ltcticker.json', ltctick, finished);
      function finished(err){
      }
})};
var interval = setInterval(getltcticker, 6000)
//
var getadaticker = function(){request.get('http://localhost:5000/coins/5a3daa7af36d2805ea512601',
  function(error,response, body) {
    var adaticker = (body);
    adatick = adaticker
    fs.writeFileSync('adaticker.json', adatick, finished);
      function finished(err){
      }
})};
var interval = setInterval(getadaticker, 6000)
//
var getdashticker = function(){request.get('http://localhost:5000/coins/5a3daa87f36d2805ea512604',
  function(error,response, body) {
    var dashticker = (body);
    dashtick = dashticker
    fs.writeFileSync('dashticker.json', dashtick, finished);
      function finished(err){
      }
})};
var interval = setInterval(getdashticker, 6000)
//
var getmiotaticker = function(){request.get('http://localhost:5000/coins/5a3daaa1f36d2805ea512606',
  function(error,response, body) {
    var miotaticker = (body);
    miotatick = miotaticker
    fs.writeFileSync('miotaticker.json', miotatick, finished);
      function finished(err){
      }
})};
var interval = setInterval(getmiotaticker, 6000)
//
var getxemticker = function(){request.get('http://localhost:5000/coins/5a3daab0f36d2805ea512607',
  function(error,response, body) {
    var xemticker = (body);
    xemtick = xemticker
    fs.writeFileSync('xemticker.json', xemtick, finished);
      function finished(err){
      }
})};
var interval = setInterval(getxemticker, 6000)
//
var getbtgticker = function(){request.get('http://localhost:5000/coins/5a3daac2f36d2805ea512608',
  function(error,response, body) {
    var btgticker = (body);
    btgtick = btgticker
    fs.writeFileSync('btgticker.json', btgtick, finished);
      function finished(err){
      }
})};
var interval = setInterval(getbtgticker, 6000)

//GET own API (END)


// Catch suscribers (START)
app.post('/suscribers/add', function(req,res){
  //validator for email (END)
  req.checkBody('email', 'Please enter your email').notEmpty();
var errors = req.validationErrors();
  if(errors){
    res.render('pages/index', {
        //render variables
        title: 'Welcome to Tingle',
        coins: coins,
        suscribers: suscribers,
        errors: errors
    });
  } else {
    var newSuscriber = {
      email: req.body.email
    }
    console.log('SUCCESS')
  }
  //validator for email (END)
  db.suscribers.insert(newSuscriber, function(err, result){
    if(err){
      console.log(err);
    }
    res.redirect('/')
  })
});
// Catch suscribers (END)


// Find individual coin (START)
app.get('/', function(res, req){
db.mycollection.findOne({
	_id: mongojs.ObjectId('5a3d7f7cf36d2805ea5111fe')
}, function(err, doc) {
  console.log(doc)
});})

// Find individual coin (START)

//LOCAL API COINS (START)
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
          //GET. SINGLE API (END)


//LOCAL API COINS (END)
