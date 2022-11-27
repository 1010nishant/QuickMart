const mongoose = require("mongoose");
const env = require("./envConfig");

const mongo_url = env.MONGO_URL;

const connect = async () => {
  try {
    mongoose.connect(mongo_url);
    console.log("database mongo connected");
  } catch (error) {
    console.log("hello");
  }
};

module.exports = connect;
