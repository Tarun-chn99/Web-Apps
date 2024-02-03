const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const http = require('http');
const {Server} = require('socket.io');

connectToMongo();
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000','http://localhost:3001'],  // Replace with the actual origin of your React app
    methods: ['GET', 'POST'],
  },
});

const port = 5000;
app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));

let userSockets={};

io.on('connection', socket => {

  socket.on('client-connection', msg => {
    console.log(`Message from server : ${msg}`)
  });

  socket.on('setUserId', (userId) => {
    userSockets[userId] = socket.id;
    console.log(`User with ID ${userId} is associated with socket ID ${socket.id}`);
  });

  socket.on('message', (msg,recieverId,name) => {
    console.log(`Message to ${name} : `,msg );
    console.log("Current users : ",userSockets);
    sendMessageToUser(recieverId,msg,name);
  })

});

function sendMessageToUser(userId, message,name) {
  const userSocketId = userSockets[userId];
  if (userSocketId) {
    io.to(userSocketId).emit('message', message,name);
  } else {
    console.log(`User with ID ${userId} not found`);
  }
}

server.listen(port, () => {
  console.log(`AurApp app listening on port http://localhost:${port}`);
});
