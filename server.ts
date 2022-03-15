let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:8080",
        allowedHeaders: ["my-custom-header"],
        methods: ["GET", "POST"],
        credentials: true
    }
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});
http.listen(3000, () => {
    console.log('Listening on port *: 3000');
});

const users = [];
io.on("connection", (socket) => {
    users.push({
        userID: socket.client.id,
        username: socket.username,
    });
    console.log(users)
    socket.emit("users", users);
    // ...
});

io.on("connection", (socket) => {
    // notify existing users
    socket.broadcast.emit("user connected", {
        userID: socket.id,
        username: socket.username,
    });
});