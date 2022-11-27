const { body } = require("express-validator");

module.exports.registerValidations = [
  body("name", "name is required").not().isEmpty().trim().escape(),
  body("email", "email is required").isEmail().normalizeEmail().trim().escape(),
  body("password", "password should be 6 character long")
    .isLength({ min: 6 })
    .trim(),
];

module.exports.loginValidations = [
  body("email", "email is required").isEmail().normalizeEmail().trim().escape(),
  body("password", "password is required").isLength({ min: 6 }).trim(),
];
