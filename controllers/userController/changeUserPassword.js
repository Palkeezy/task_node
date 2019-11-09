const {tokenRefreshPassVerification} = require('../../helpers');
const {userService} = require('../../services');
const ErrorHandler = require('../../error/ErrorHandler');

module.exports = async (req, res) => {
    try {
        const {password, newPassword, confirmNewPassword} = req.body;
        const {token} = req.params;
        const {user: userMail} = tokenRefreshPassVerification(token);

        const userToUpdatePassword = await userService.getUserByEmail(userMail);

        if (!userToUpdatePassword) {
            throw new ErrorHandler('user is not present', 403, 'changeUserPassword');
        }
        if (userToUpdatePassword.password !== password) {
            throw new ErrorHandler('incorrect password', 403, 'changeUserPassword');
        }
        if (newPassword !== confirmNewPassword) {
            throw new ErrorHandler('passwords do not match', 403, 'changeUserPassword');
        }

        await userService.changeUserPassword(newPassword, userMail);

        res.json({
            success: true,
            msg: 'OK'
        })
    } catch (e) {
        res.status(e.status).json({
            message: e.message,
            controller: e.controller
        })
    }
};
