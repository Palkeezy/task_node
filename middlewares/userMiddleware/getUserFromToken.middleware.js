const ErrorHandler = require('../../error/ErrorHandler');
const {userService} = require('../../services');
const {tokenVerification} = require('../../helpers');

module.exports = async (req, res, next) => {
    const token = req.get('Authorization');
    const {id, email, password, firstName, lastName} = tokenVerification(token);

    const userFromToken = await userService.getUserByParams({id, email, password, firstName, lastName});

    if (!userFromToken) {
        return next(new ErrorHandler('No user', 404, 'getUserFromToken'))
    }

    req.user = userFromToken;

    next();
};
