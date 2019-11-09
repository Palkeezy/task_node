const jwt = require('jsonwebtoken');
require('dotenv').config();
const ErrorHandler = require('../error/ErrorHandler');

module.exports = (token) => {
    let user = null;
    jwt.verify(token, process.env.JWT_SECRET_RESET_PASS, (err, decodedUser) => {
            if (err) {
                throw new ErrorHandler('Token is not valid', 403, 'tokenPassVerification')
            }

            user = decodedUser;
        }
    );
    return user;
};
