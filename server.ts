require("dotenv").config();
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
let app = require("express")();
import user from "./api/routes/userRouter";

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(morgan("dev"));
app.use("/user", user);

let http = require("http").Server(app);
http.listen(3000, function () {
  console.log("Сервер ожидает подключения...");
});

let io = require("socket.io")(http, {
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
