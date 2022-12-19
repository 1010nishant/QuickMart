const { validationResult } = require('express-validator')
const CategoryModel = require('../models/Category')

class Category {
    async create(req, res) {
        const errors = validationResult(req)
        const { name } = req.body;
        if (errors.isEmpty()) {
            const exist = await CategoryModel.findOne({ name })
            console.log('exist in cat controller', exist)
            if (exist == null) {
                await CategoryModel.create({ name })
                console.log("in null exist")
                return res.status(201).json({ message: `your category ${name} has been created successfully` })
            } else {
                return res.status(401).json({ errors: [{ msg: `${name} is already exist` }] })
            }
        } else {
            return res.status(401).json({ errors: errors.array() })
        }

    }
}

module.exports = new Category;