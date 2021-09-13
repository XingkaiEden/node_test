const io = require("socket.io-client");

const socket = io("ws://localhost:3001");

socket.emit('event',"hello")



// const clientA={
//     message:"hello from a"
// }
// const clientB = {
//     message:""
// }

// console.log("before")
// console.log(clientA["message"])
// console.log(clientB["message"])

// chatServer.sendMessage(clientA, clientB);

// console.log("after")
// console.log(clientA["message"])
// console.log(clientB["message"])