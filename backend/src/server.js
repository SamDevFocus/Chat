const { WebSocketServer } = require("ws")
const dotenv = require("dotenv")

dotenv.config()

let numClients = 0;

const wss = new WebSocketServer({ port: process.env.PORT || 8080 })

wss.on("connection", (ws) => {
    ws.on("error", console.error)

    ws.on("message", (data) => {
        wss.clients.forEach((client) => client.send(data.toString()))
    })

    numClients++;
    console.log(`client connected, total clients: ${numClients}`);

    ws.on("close", () => {
        numClients--;
        console.log(`client disconnected, total clients: ${numClients}`);
    })
})
