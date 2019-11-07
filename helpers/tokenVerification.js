const jwt = require('jsonwebtoken');
require('dotenv').config();
const ErrorHandler = require('../error/ErrorHandler');

module.exports = (token) => {
    let user = null;
    jwt.verify(token, process.env.JWT_SECRET_PASS, (err, decodedUser) => {
        if (err) {
            throw new ErrorHandler('Token is not valid', 403, 'tokenVerification')
        }

        user = decodedUser;
    }
    );
    return user;
};
