const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/envConfig");

const hashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
}

const createToken = (user) => {
  return jwt.sign({ user }, JWT_SECRET_KEY, {
    expiresIn: "7d",
  });
};

const comparePassword = async (password, dbPassword) => {
  const result = await bcrypt.compare(password, dbPassword);
  return result;
};

module.exports = { hashedPassword, createToken, comparePassword };
