const { body } = require('express-validator')

module.exports.categoryValidaton = [
    body('name').not().isEmpty().trim().escape().withMessage('category is required')
]