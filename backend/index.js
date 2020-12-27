'use strict';

const express = require('express');

// Constants
const PORT = 8999;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  var message = process.env.HOSTNAME || '';
  if (message !== '') {
    res.send(message);
  } else {
    res.send('Hello World --- backend');
  }
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);