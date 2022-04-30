import { connect, model, Schema, Model, Document } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const DB = process.env.connect_string;

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
        const options = {
            autoIndex: false, // Don't build indexes
            maxPoolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4 // Use IPv4, skip trying IPv6
        };
        await connect(DB, options)
    } catch (err) {
        console.log(err)
    }

    const user: IUser = await User.create({
        username: req.body.username,
        password: req.body.password
    });

    console.log('Done', user._id);
});
// userRouter.use("/auth", user.auth);
export default userRouter
