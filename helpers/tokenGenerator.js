const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET_PASS, {expiresIn: '24h'});
};
