'use strict';

const express = require('express');
const http = require('http');

// Constants
const PORT = 8080;
const BACKEND_PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  http.get(`http://self-hello-backend:${BACKEND_PORT}/`, (get) => {
    var body = '';
    get.on('data', (chunk) => { body += chunk });
    get.on('end', () => {
        var hostname = process.env.HOSTNAME || 'local';
        var message = process.env.MESSAGE || '';
        if (message !== '') {
          res.send(`${message} provided by communication between: ${hostname} and ${body}`);
        } else {
          res.send('Hello World');
        }
    });
    get.on('error', (e) => {
        res.send(e.message);
    });
  })
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);