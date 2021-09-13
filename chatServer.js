const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
    
  client.on('event', data => { client.emit('event', data) });
  client.on('disconnect', () => { /* … */ });
  
});
const Port = 3000
console.log(`Listening on port ${Port}...`)
server.listen(Port);


function sendMessage(sender ,receiver) {
    if(sender.message) receiver.message = sender.message;
    sender.message=""
}


module.exports={
    sendMessage
}