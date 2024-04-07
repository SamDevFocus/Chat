const {WebSocketServer} = require("ws")
const dotenv = require("dotenv")

dotenv.config()

const wss = new WebSocketServer({ port: process.env.PORT || 8080});

wss.on("connection", (ws) => {
    ws.on('error', console.error);

    ws.on("massage", (data) => {

        wss.clients.forEach((client) => client.send(data.toString()))

        console.log("Client Connected")
    })
})