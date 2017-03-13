var express = require('express')
var app = express()

var server = app.listen(5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
