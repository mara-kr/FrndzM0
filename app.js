var express = require('express');
var path = require('path');
var api = require('./routes/api.js');
var Account = require('./routes/account.js');
var Transaction = require('./routes/transactions.js');
var morgan = require('morgan');
GLOBAL._ = require('underscore');

var app = module.exports = express();
app.set('port', process.env.PORT || 8000);
app.use(express.static(path.join(__dirname, 'public')));
// Setup Access Headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Setup logger
app.use(morgan('combined'));

// Routes 
app.get('/transaction', Transaction.all);
app.get('/transaction/:id', Transaction.get);


app.listen(app.get('port'), function() {
    var host = this.address().address;
    var port = this.address().port;
    console.log("Server running on http://%s:%s", host, port);
})