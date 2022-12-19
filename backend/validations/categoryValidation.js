const { body } = require('express-validator')

module.exports.categoryValidation = [
    body('name').not().isEmpty().trim().escape().withMessage('category is required')
]