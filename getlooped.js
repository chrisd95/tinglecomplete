//HTTP request BTCTICKER (START)
const request = require('request')


var getbtcticker = function (){request.get('http://localhost:8080/coins/5a34b7c60c162c5ea0601337',
  function(error,response, body) {
    var btcticker = (body);
    lol = btcticker
    fs.writeFileSync('cointicker.json', lol, finished);
      function finished(err){
      }
})}

var interval = setInterval(getbtcticker, 10000)
//HTTP request BTCTICKER (END)
