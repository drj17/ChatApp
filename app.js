const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const chatServer = require('./lib/chatServer.js');


app.use(express.static('public'));

chatServer.listen(http);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


http.listen(8080, () => {
  console.log("server listening on port 8080");
});
