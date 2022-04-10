const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
let app = require("express")();
const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient("mongodb://alexandr:baguvix1B@45.143.95.183:27017");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

let http = require("http").Server(app);

mongoClient.connect(function (err, client) {
  if (err) return console.log(err);
  app.locals.collection = client.db("axbn").collection("users");
  http.listen(3000, function () {
    console.log("Сервер ожидает подключения...");
  });
});

app.post('/user/register', async function (req, res) {
  if (req.query.name == null) {
    return res.sendStatus(400)
  }
  console.log(req.body)
  const collection = app.locals.collection
  await collection.insertOne(req.query).then((data) => {
    res.send(true)
  }).catch(err => {
    console.log(err)
  })
})
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
