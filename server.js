const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
let app = require("express")();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev")); // configire morgan

// define first route
app.get("/", () => {
  console.log("Hello MEVN Soldier");
});

let http = require("http").Server(app);

http.listen(3000, () => {
  console.log("Listening on port 3000");
});

let io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:8080",
    allowedHeaders: ["my-custom-header"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const users = [];
io.on("connection", (socket) => {
  users.push({
    userID: socket.client.id,
    username: socket.username,
  });
  console.log(users);
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
