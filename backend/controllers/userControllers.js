const { validationResult } = require("express-validator");
const userModel = require("../models/User");
const {
  hashedPassword,
  createToken,
  comparePassword,
} = require("../services/authServices");

module.exports.register = async (req, res) => {
  const errors = validationResult(req);
  console.log("error below", errors);
  if (errors.isEmpty()) {
    console.log("validation implemented");
    const { name, email, password } = req.body;
    try {
      const emailExist = await userModel.findOne({ email });
      console.log("email", emailExist);
      if (!emailExist) {
        console.log('firsst')
        console.log('sec')
        const hashed = await hashedPassword(password);
        const user = await userModel.create({
          name: name,
          email: email,
          password: hashed,
        });
        const token = createToken({ id: user._id, name: user.name });
        return res
          .status(201)
          .json({ msg: "your account has been created", token });
      } else {
        return res
          .status(401)
          .json({ errors: [{ msg: `${email} is already taken` }] });
      }
    } catch (error) {
      console.log('500 error', error.message);
      return res.status(500).json("server internal error!");
    }
  } else {
    //validation failed
    console.log(errors.array());
    console.log(`validation failed`);
    return res.status(400).json({ errors: errors.array() });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      const user = await userModel.findOne({ email: email });
      console.log(user);
      if (user) {
        if (await comparePassword(password, user.password)) {
          const token = createToken({ id: user._id, name: user.name });
          if (user.admin) {
            return res.status(201).json({ token, admin: true });
          } else {
            return res.status(201).json({ token, admin: false });
          }
        } else {
          return res.status(400).json({
            errors: [{ msg: "password not matched!" }],
          });
        }
      } else {
        return res.status(400).json({
          errors: [{ msg: `${email} is not found!` }],
        });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("server internal error!");
    }
  } else {
    //validation failed
    console.log(errors.array());
    console.log(`validation failed`);
    return res.status(400).json({ errors: errors.array() });
  }
};
