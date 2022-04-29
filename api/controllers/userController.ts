import User from "../models/userModel";

const register = function (request, response) {
  //
  console.log("register");
};

const getUsers = function (request, response) {
  User.find({}, function (err, allUsers) {
    if (err) {
      console.log(err);
      return response.sendStatus(400);
    }
    response.send("users");
  });
};

const auth = function (request, response) {
  if (!request.body) return response.sendStatus(400);
  const userName = request.body.username;
  const userPassword = request.body.password;
  const user = new User({ name: userName, password: userPassword });
  console.log(user);
  user.find(function (err) {
    if (err) return console.log(err);
    response.send("false")
  });
};

export default { register, auth };
