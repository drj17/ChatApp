const io = require('socket.io');

const chatServer = {
  listen (server) {
    let chat = io(server);
    chat.on('connection', () => {
      console.log("connected");
    });
  },
  handleMessageBroadcast (socket) {
    socket.on('message', (message) => {
      socket.emit('message', message);
    });
  }
};

module.exports = chatServer;
