const express = require('express')
const router = express.Router()
const { categoryValidaton } = require('../../validations/categoryValidation')
const CategoryController = require('../../controllers/categoryController')

router.post('/create-category', categoryValidaton, CategoryController.create);

module.exports = router;