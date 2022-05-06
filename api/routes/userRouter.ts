import { connect, model, Schema, Model, Document } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const userRouter = require("express").Router();
interface IUser extends Document {
    username: string,
    password: string
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

userRouter.use("/file-preview", async function (req, res) {
    try {
        console.log(req)
        await connect(process.env.connect_string)
        const user: IUser = await User.findOne({ username: req.body.username })
        console.log(user)
        res.send(user)
    } catch (err) {
        console.log(err)
    }
});

// userRouter.use("/auth", user.auth);
export default userRouter
