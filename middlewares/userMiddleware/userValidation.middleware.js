const joi = require('joi');
const ErrorHandler = require('../../error/ErrorHandler');
const {userValidation} = require('../../validators');

module.exports = async (req, res, next) => {
    const userObj = req.body;

    const isUserValid = joi.validate(userObj, userValidation);

    if (isUserValid.error) {
        return next(new ErrorHandler(isUserValid.error.details[0].message, 400, 'userValidation'));
    }

    next()
};
