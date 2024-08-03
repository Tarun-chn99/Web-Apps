import {Server} from "socket.io";

const io = new Server(9000,{
    cors: {
        origin: ['http://localhost:3000','http://localhost:3001','http://localhost:3002']
    }
});

// io.on('connection',(socket) => {
    // });
    
    const addUser = (userId, socketId) => {
        !userSockets.some(user => user.id === userId) && userSockets.push({ userId, socketId });
    }
    const userSockets=[];
    
    io.on('connection', socket => {
        
    // console.log("User connected");
        socket.emit('user-connect','Connection Established',(response) => {
          console.log(response.status);
        });
      
        socket.on('client-connection', msg => {
          console.log(`Message from server : ${msg}`)
        });
      
        
        socket.on('setUserId', (userId) => {
          addUser(userId,socket.id);
        //   userSockets[userId] = socket.id;
          console.log(`User with ID ${userId} is associated with socket ID ${socket.id}`);
        });
      
        socket.on('messageFromSender', (type,msg,recieverId,name) => {
          console.log(`Message to ${name} : `,msg );
          console.log(`Reciever ID : ${recieverId}`)
          console.log("Current users : ",userSockets);
          socket.broadcast.emit("messageToReciever",type,msg);

        });
  });
 