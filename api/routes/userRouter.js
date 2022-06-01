require("dotenv").config()
const MongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectId
const multer = require("multer")
const path = require("path")
const express = require('express')
const userRouter = express.Router();
const uuid = require("uuid")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/assets/avatars/')
    },
    filename: function (req, file, cb) {
        cb(null, uuid.v4() + path.extname(file.originalname));
    }
})

var uploads = multer({
    // dest: 'public/uploads/'
    storage: storage
});

// создаем объект MongoClient и передаем ему строку подключения
const mongoClient = new MongoClient(process.env.connect_string);
userRouter.use("/register", async function (req, res) {
    try {
        mongoClient.connect(function (err, client) {
            if (err) {
                return res.send(err);
            }

            console.log(req.body)
            client
                .db("axbn")
                .collection("users")
                .insertOne({
                    username: req.body.username,
                    password: req.body.password
                })
                .then(document => res.send(document))
                .catch(err => res.send(err))
        });
    } catch (err) {
        console.log(err)
    }
});

userRouter.use("/auth", async function (req, res) {
    try {
        mongoClient.connect(function (err, client) {

            if (err) {
                return console.log(err);
            }
            console.log(req.body)
            client.db("axbn").collection("users").findOne({
                username: req.body.username,
                password: req.body.password
            }).then((document) => {
                console.log(document)
                // res.sendStatus(200)
                res.send(document)
                client.close();
            })
        });
    } catch (err) {
        console.log(err)
    }
});

userRouter.use("/username_check", async function (req, res) {
    try {
        mongoClient.connect(function (err, client) {
            if (err) return res.send(err)
            client
                .db("axbn")
                .collection("users")
                .findOne({
                    username: req.body.username
                })
                .then(document => res.send(document))
                .catch(err => res.send(err))
        })
    } catch (err) {
        console.log(err)
    }
});

userRouter.use("/get_friends", async function (req, res) {
    res.send(['1', '2', '3'])
});

userRouter.use("/get_userinfo", async function (req, res) {
    try {
        mongoClient.connect(function (err, client) {

            if (err) {
                return console.log(err);
            }
            console.log(req.body)
            client.db("axbn").collection("users").findOne({
                _id: new ObjectId(req.body.token)
            }).then((document) => {
                console.log(document)
                // res.sendStatus(200)
                res.send(document)
                client.close();
            })
        });
    } catch (err) {
        console.log(err)
    }
});

userRouter.use("/file-preview", uploads.single("avatar"), async function (req, res) {
    // { "avatar": req.file.destination + req.file.filename  }
    try {
        mongoClient.connect(function (err, client) {
            console.log(req.file.filename)
            console.log(req.file.destination)
            if (err) {
                return console.log(err);
            }
            return client.db("axbn").collection("users").findOneAndUpdate({
                "username": 'admin'
            }, {
                $set: {
                    "avatar": req.file.destination + req.file.filename
                }
            }, {
                returnNewDocument: true
            }).then((document) => {
                // res.sendStatus(200)
                res.send(document.value.avatar)
            })
        });
    } catch (err) {
        console.log(err)
    }
});

module.exports = userRouter;