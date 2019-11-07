const {userService} = require('../../services');
const ErrorHandler = require('../../error/ErrorHandler');

module.exports = async (req, res, next) => {
    const {email} = req.body;

    const userIsPresent = await userService.getUserByEmail(email);

    if (userIsPresent) {
        return next(new ErrorHandler('User is already Exist', 404, 'checkUserIsPresent'));
    }

    next()
};
