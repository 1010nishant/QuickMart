const jwt = require('jsonwebtoken')
const { JWT_SECRET_KEY } = require('../config/envConfig')

class Authorization {
    authorized(req, res, next) {
        const headerToken = req.headers.authorization
        if (headerToken) {
            const token = headerToken.split('bearer ')[1]
            const verified = jwt.verify(token.JWT_SECRET_KEY)
            if (verified) {
                next();
            } else {
                return res.status(401).json({ errors: [{ msg: 'Please add a valid token' }] })
            }

        } else {
            return res.status(401).json({ error: 'unauthorized access' })
        }

    }
}

module.exports = new Authorization();