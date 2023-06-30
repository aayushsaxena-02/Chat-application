const express = require("express");
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const {Server} = require("socket.io");
const http = require('http');
const cors = require('cors');
const {chats} = require("./data/data");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// const server = http.createServer(app);
// const io = new Server(server,{
//     cors: {
//         origin:"http://localhost:3000/",
//         methods: ["GET","POST"]
//     }
// });

app.get('/api/chats/',(req,res) => {
    const id = req.params.id;
    const singleChat = chats.find(chat => chat._id === id);
    res.send(chats);
});

// io.on("connection",(socket) => {
//     console.log(`User Connected: ${socket.id}`);
// })

// server.listen(8000, () => {
//     console.log("server is running on 8000");
// })

app.listen('5000',(req,res) => {
    console.log("Server running on port 5000");
})