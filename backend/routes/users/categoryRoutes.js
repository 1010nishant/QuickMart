const express = require('express')
const router = express.Router()
const { categoryValidation } = require('../../validations/categoryValidation')
const CategoryController = require('../../controllers/categoryController')
const Authorization = require('../../services/Authorization')

router.post('/create-category', [categoryValidation, Authorization.authorized], CategoryController.create);

module.exports = router;