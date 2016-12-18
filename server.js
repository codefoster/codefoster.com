var express = require('express');
var path = require('path');
express()
    .use(express.static(path.join(__dirname,'public')))
    .listen(process.env.PORT || 3000);