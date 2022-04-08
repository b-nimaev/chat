const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
let mongoose = require("mongoose");
let app = require("express")();

//configure database and mongoose
mongoose
  .connect("mongodb://45.143.95.183:27017", {
    auth: { authSource: "admin" },
    user: "alexandr",
    pass: "baguvix1B",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log({ database_error: err });
  });
// db configuaration ends here
//registering cors
app.use(cors());
//configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//configure body-parser ends here

app.use(morgan("dev")); // configire morgan

// define first route
app.get("/", () => {
  console.log("Hello MEVN Soldier");
});

const userRoutes = require("./api/user/route/user"); //bring in our user routes
app.use("/user", userRoutes);

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
