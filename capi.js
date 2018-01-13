//HTTP request BTCTICKER (START)
const request = require('request')
var fs = require('fs')


var cmcapi = function (){request.get('https://api.coinmarketcap.com/v1/ticker/?limit=24',
  function(error,response, body) {
    var cmcapi = (body)
    fs.writeFileSync('limit10.json', cmcapi, finished);
      function finished(err){
      }
})}

var interval = setInterval(cmcapi, 7000)
