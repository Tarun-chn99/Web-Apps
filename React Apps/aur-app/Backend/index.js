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

io.on('connection', socket => {
  socket.on('chat-message', msg => {
    console.log(`message: ${msg}`)
  });
});

server.listen(port, () => {
  console.log(`AurApp app listening on port http://localhost:${port}`);
});
