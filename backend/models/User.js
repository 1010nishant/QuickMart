const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  admin: {
    required: true,
    type: Boolean,
    default: false,
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
