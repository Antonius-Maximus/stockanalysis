// Set up express server and import dependencies
var express = require('express');
var path = require('path')
var app = express()
var bodyParser = require('body-parser');
var server = require('http').Server(app);
var io = require('socket.io')(server);
const port = 4000;

app.use(express.static(path.join(__dirname, 'src')));
app.use(bodyParser.json())

var models = require('./models.js');
var Stock = models.Stock;

app.post('/newTrade', function(req, res) {
  const newTrade = new Stock({

  });
  newTrade.save(function(error, trade) {
    if (error) {
      res.json({success: false})
    }
    else {
      res.json({success: true})
    }
  })
})
