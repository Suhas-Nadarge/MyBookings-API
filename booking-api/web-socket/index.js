

//     io.on('connection', socket => {

//         console.log('Connection initiated'); 
//         io.emit('my broadcast', `server: hjhj`);
// 		socket.on('if connection disconnect', () => console.log('disconnected')); 
		
// 	})
// }
module.exports = (io) => {
io.on('connection', (socket) => {
  
    console.log('a user connected');
    
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    
    socket.on('my broadcast', (msg) => {
      console.log('message: ' + msg);
      io.emit('my broadcast', `server: ${msg}`);

    });
  });

 
}