//REQUIREMENTS (START)
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var fs = require ('fs');
var lol;


//models
var Book = require('./models/Book.model');
var Coin = require('./models/Coin.model');
//REQUIREMENTS (END)



//PORTS (START)
  //WEBSITE PORT
var PORT = process.env.PORT || 5000
  //SERVER PORT
var port = 8080;
//PORTS (END)


//DATABASE CONNECTION
var db = 'mongodb://localhost/example'
mongoose.connect(db);

//VIEW ENGINE EJS (START)
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index',{btcticker:lol}))

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  //var btcticker=23456;
  //var btcticker = "fdsafas"
//VIEW ENGINE EJS (END)

//PORTMAN ADD-ON (START)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
//PORTMAN ADD-ON (END)


//SERVER PORT MSG (START)
app.get('/', function(req, res) {
  res.send('happy to be here');
});
//SERVER PORT MSG (END)


//GET. ALL BOOKS QUERY (START)
app.get('/books', function(req, res) {
  console.log('getting all books');
  Book.find({})
    .exec(function(err, books) {
      if(err) {
        res.send('error occured')
      } else {
        console.log(books);
        res.json(books);
      }
    });
});
//GET. ALL BOOKS QUERY (END)


//HTTP request BTCTICKER (START)
const request = require('request')
request.get('http://localhost:8080/coins/5a34b7c60c162c5ea0601337',
  function(error,response, body) {
    var btcticker = (body);
    lol = btcticker
    fs.writeFileSync('cointicker.json', lol, finished);
      function finished(err){
      }
})
//HTTP request BTCTICKER (END)


//GET. ALL COINS QUERY (START)
app.get('/coins', function(req, res) {
  console.log('getting all coins');
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

//GET. ALL COINS QUERY (END)


//link variable to response



var query = {};
//GET. SINGLE BOOKS (START)
app.get('/coins/:id', function(req, res) {
  console.log('getting all coins');
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
//GET. SINGLE BOOKS (END)


//POST BOOKS (START)
app.post('/book', function(req, res) {
  var newBook = new Book();

  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.category = req.body.category;

  newBook.save(function(err, book) {
    if(err) {
      res.send('error saving book');
    } else {
      console.log(book);
      res.send(book);
    }
  });
});
//POST BOOKS (END)



//PUT BOOKS (START)
app.put('/book/:id', function(req, res) {
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
//PUT BOOKS (END)

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
  console.log('app listening on port ' + port);
});
