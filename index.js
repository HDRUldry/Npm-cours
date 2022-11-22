const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('BONJOUR LE MONDE')
})

app.listen(3002)