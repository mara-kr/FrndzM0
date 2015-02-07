/* Basic imports */
GLOBAL._ = require('underscore');
var express = require('express');
var path = require('path');
// var api = require('./routes/api.js');
var Account = require('./routes/account.js');
var Transaction = require('./routes/transactions.js');
var morgan = require('morgan');

/* Setup Express App */
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
app.use(morgan('dev'));

// Routes 
var api = express.Router(); // Move to api.js
api.get('/transaction', Transaction.all);
api.get('/transaction/:id', Transaction.get);
api.get('/user', Account.current);
api.get('/user/:id', Account.get);

app.use('/api', api);

app.listen(app.get('port'), function() {
    var host = this.address().address;
    var port = this.address().port;
    console.log("Server running on http://%s:%s", host, port);
})