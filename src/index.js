const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello this is more\n')
})

app.listen(3000)