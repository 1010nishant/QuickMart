const { body } = require("express-validator");

module.exports.registerValidations = [
  body("name", "name is required").not().isEmpty().trim().escape(),
  body("email", "email is required").isEmail().normalizeEmail().trim().escape(),
  body("password")
    .isLength({ min: 8, max: 20 })
    .matches(/^(?!.* )/)
    .withMessage('not matched white space')
    .not()
    .matches(/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/)
    .withMessage('not matched')
];

module.exports.loginValidations = [
  body("email", "email is required").isEmail().normalizeEmail().trim().escape(),
  body("password")
    .isLength({ min: 8, max: 20 })
    .matches(/^(?!.* )/)
    .withMessage('not matched white space')
    .not()
    .matches(/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/)
    .withMessage('not matched')
];
