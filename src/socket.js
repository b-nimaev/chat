const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "http://localhost:8080",
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});
io.on("connection", (socket) => {
    console.log(socket.rooms); // Set { <socket.id> }
    socket.join("room1");
    console.log(socket.rooms); // Set { <socket.id>, "room1" }
});