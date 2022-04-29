const express = require("express");
import userController from "../controllers/userController";
const userRouter = express.Router();

userRouter.use("/register", userController.register);
userRouter.use("/auth", userController.auth);
export default userRouter
