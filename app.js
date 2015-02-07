var express = require('express');
var http = require('http');
var path = require('path');
var api = require('./routes/api.js');

var app = module.exports = express();
app.set('port', process.env.PORT || 8000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/post', api.posts);
app.get('/post/:id', api.post);

http.createServer(app).listen(app.get('port'), function() {
    var host = this.address().address;
    var port = this.address().port;
    console.log("Server running on http://%s:%s", host, port);
})