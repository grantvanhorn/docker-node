const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello this is more: ' + process.env.DEBUG + '\n');
})

app.listen(3000);