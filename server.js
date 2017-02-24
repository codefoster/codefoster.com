var express = require('express');
var path = require('path');
var dir = path.join(__dirname,'public');
var port = process.env.PORT || 3000;
express()
    .use(express.static(dir))
    .listen(port);
console.log('Serving ' + dir + ' on port ' + port);