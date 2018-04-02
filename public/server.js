var express = require('express');
var path = require('path')

express()
  .use(express.static(__dirname, {
    setHeaders: (res, requestPath) => {
      let noExtension = !Boolean(path.extname(requestPath));
      if(noExtension) res.setHeader('Content-Type', 'text/html');
    }
  }))

  .listen(process.env.PORT || 3000);