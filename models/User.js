const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

//Create a model
const User = mongoose.model("userslist", UserSchema);

// Exports the model

module.exports = User;
