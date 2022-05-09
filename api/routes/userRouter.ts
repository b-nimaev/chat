import { connect, model, Schema, Model, Document } from 'mongoose';
import dotenv from 'dotenv';
import multer from "multer";
import path from "path";
import { ObjectId } from 'mongodb';
var uuid = require("uuid");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/avatars/')
    },
    filename: function (req, file, cb) {
        cb(null, uuid.v4() + path.extname(file.originalname));
    }
})

var uploads = multer({
    // dest: 'public/uploads/'
    storage: storage
});


dotenv.config();

const userRouter = require("express").Router();
interface IUser extends Document {
    username: string,
    password: string,
    avatar: string
}

const UserSchema: Schema = new Schema({
    username: { type: String },
    password: { type: String }
});

const User: Model<IUser> = model('User', UserSchema);

userRouter.use("/register", async function (req, res) {
    try {
        await connect(process.env.connect_string)
        console.log(req)
        console.log(req.body.username)
        const user: IUser = await User.create({
            username: req.body.username,
            password: req.body.password
        });
        console.log("Done", user._id)
    } catch (err) {
        console.log(err)
    }
});

userRouter.use("/auth", async function (req, res) {
    try {
        await connect(process.env.connect_string)
        const user: IUser = await User.findOne({ username: req.body.username })
        res.send(user)
    } catch (err) {
        console.log(err)
    }
});

userRouter.use("/username_check", async function (req, res) {
    try {
        await connect(process.env.connect_string)
        console.log(req)
        const user: IUser = await User.findOne({ username: req.body.username })
        console.log(user)
        res.send(user)
    } catch (err) {
        console.log(err)
    }
});

userRouter.use("/file-preview", uploads.single("avatar"), async function (req, res) {
    // { "avatar": req.file.destination + req.file.filename  }
    try {
        await connect(process.env.connect_string)
        console.log(req.body)
        await User.findOne({ _id: new ObjectId(req.body.user_id) }).then((data) => {
            console.log(data)
        })
        await User.updateOne({ _id: new ObjectId(req.body.user_id) }, { $set: { "avatar": req.file.destination + req.file.filename } }, { new: true }).then((data) => {
            console.log(data)
        })
    } catch (err) {
        console.log(err)
    }
});

// userRouter.use("/auth", user.auth);
export default userRouter
