
  //   module.exports = (io) => {
  //   io.on('connection', socket => {

  //       console.log('Connection initiated'); 
  //       io.emit('my broadcast', `server: hjhj`);
	// 	socket.on('if connection disconnect', () => console.log('disconnected')); 
		
	// })


module.exports = (io) => {
 

  let usersList = []
  let allTickets = []
  const msgList = []
io.on('connection', (socket) => {
  
    console.log('a user connected-1');
    
    socket.on('disconnect', () => {
      console.log('user disconnected');
     usersList = [];
     

    });
    
    socket.on('my broadcast', (obj) => {
      var userTempObj = {
        id:'',
        seatList:[]
      }
      if(!usersList.includes(obj.id)){

        usersList.push(obj.id)
        userTempObj.id = obj.id,
        userTempObj.seatList.push(obj.seatObj.seatLabel) 
        allTickets.push(userTempObj);
      } else {
        allTickets.map(elr=> elr.id === obj.id ? elr.seatList.push(obj.seatObj.seatLabel): elr.seatList = elr.seatList )
      }
      console.log('Hello from Angular: ' + JSON.stringify(obj));
      msgList.push(obj.id)
      console.log('----)'+ usersList,allTickets);

      io.emit('my broadcast', allTickets);
    });
  });
    }

    
 
