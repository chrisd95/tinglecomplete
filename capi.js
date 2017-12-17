var fs = require('fs');

const request = require('request')
request.get('https://api.bitfinex.com/v1/pubticker/BTCUSD',
  function(error, response, body) {
    var data = JSON.stringify(body);
    fs.writeFileSync('cointicker.json', body, finished);
      function finished(err){
      }
})


var data = fs.readFileSync('cointicker.json');
var cointicker = JSON.parse(data)

console.log(cointicker);

console.log('BTCUSD price was updated.')
