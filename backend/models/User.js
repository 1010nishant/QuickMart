const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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

const userModel = mongoose.model("user", userSchema);//user become users it automaticlly add 's'
module.exports = userModel;
