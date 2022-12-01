const express = require("express");
const router = express.Router();
const {
  registerValidations,
  loginValidations,
} = require("../../validations/userValidations");
const { register, login } = require("../../controllers/userControllers");

router.post("/register", registerValidations, register);
router.post("/login", loginValidations, login);

module.exports = router;
