const ErrorHandler = require('../../error/ErrorHandler');
const {userService} = require('../../services');

module.exports = async (req, res) => {
    try {
        const userFromToken = req.user;
        const {user_id} = req.params;
        const {firstName, lastName} = req.body;
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
