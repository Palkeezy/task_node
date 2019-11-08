const ErrorHandler = require('../../error/ErrorHandler');
const {userService} = require('../../services');
const {updateUserValidation} = require('../../validators');
const joi = require('joi');

module.exports = async (req, res) => {
    try {
        const userFromToken = req.user;
        const {user_id} = req.params;
        const {firstName, lastName} = req.body;
        const isNamesValid = joi.validate({firstName, lastName}, updateUserValidation);
        if (isNamesValid.error) {
            throw new ErrorHandler(isNamesValid.error.details[0].message, 400, 'namesValidation');
        }

        const userToRename = await userService.getUserById(user_id);
        if (!userToRename) {
            throw new ErrorHandler('User not found', 403, 'updateUserController')
        }

        if (userFromToken.id !== userToRename.id) {
            throw new ErrorHandler('you don\'t have permission', 403, 'updateUserController')
        }

        await userService.updateUser(firstName, lastName, userFromToken.id);

        res.status(201).end();
    } catch (e) {
        res.status(e.status).json({
            message: e.message,
            controller: e.controller
        })
    }
};
