var express = require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'developement'; 

var app = express();
var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/routes')(app);
require('./server/config/passport')();

var port = config.port;
app.listen(port);
console.log('server is running on port ' + port + ' ...');