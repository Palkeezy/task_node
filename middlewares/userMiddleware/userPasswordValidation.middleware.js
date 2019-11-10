const joi = require('joi');
const ErrorHandler = require('../../error/ErrorHandler');
const {userPasswordValidation} = require('../../validators');

module.exports = async (req, res, next) => {
    const userPasswordsToUpdate = req.body;

    const isUserPasswordValid = joi.validate(userPasswordsToUpdate, userPasswordValidation);

    if (isUserPasswordValid.error) {
        return next(new ErrorHandler(isUserPasswordValid.error.details[0].message, 400, 'userPasswordValidation'));
    }

    next()
};
