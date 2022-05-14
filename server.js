require("dotenv").config()
const morgan = require("morgan")
const cors = require("cors")
const BodyParser = require("body-parser")
const express = require("express")
let app = express()
const user = require("./api/routes/userRouter.js")
const http = require('http')
const Server = require("socket.io").Server


app.use(cors());
app.use(BodyParser.json());
app.use(
  BodyParser.urlencoded({
    extended: true,
  })
);
app.use(morgan("dev"));
app.use("/user", user);

const httpServer = http
  .Server(app)
  .listen(3000, function () {
    console.log("Сервер ожидает подключения...");
  });

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:8080",
    allowedHeaders: ["my-custom-header"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  // notify existing users
  socket.broadcast.emit("user connected", {
    userID: socket.id,
    username: socket.username,
  });
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
});