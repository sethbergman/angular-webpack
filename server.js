var express = require('express')
var app = express()

var server = app.listen(3000, function () {
  console.log('Server running at localhost:' + server.address().port)
})