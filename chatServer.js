const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('event', data => { console.log(data) });
  client.on('disconnect', () => { /* … */ });
});


console.log(`Listening on port 3001...`)
server.listen(3001);


function sendMessage(sender ,receiver) {
    if(sender.message) receiver.message = sender.message;
    sender.message=""
}


module.exports={
    sendMessage
}