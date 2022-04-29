const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы
const userScheme = new Schema({
  name: String,
  password: String
});

// установка модели
const User = mongoose.model("User", userScheme);

export default User;
