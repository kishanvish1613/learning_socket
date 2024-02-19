const express = require("express");
const http = require('http');

const app = express();
const server = http.createServer(app);

const { Server } = require ('socket.io');
const io = new Server(server); 


const PORT = 3001;

app.use('/', express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('a user connected');
})

server.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
