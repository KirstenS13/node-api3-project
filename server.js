const express = require('express');
const logger = require('./middleware/logger');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware
// moved code to logger.js
server.use(logger());

module.exports = server;
