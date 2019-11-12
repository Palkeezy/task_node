const db = require('../../dataBase').getInstance();
const {sendEmailToChangePassword} = require('../../helpers');
const ErrorHandler = require('../../error/ErrorHandler');

module.exports = async (req, res, next) => {
    try {
        const UserModel = db.getModel('User');
        const {email} = req.body;
        const isPresent = await UserModel.findOne({
            where: {
                email
            }
        });
        if (!isPresent) {
            throw new ErrorHandler('user is not present', 403, 'sendChangeEmail');
        }

        const info = await sendEmailToChangePassword(email);

        res.json({
            success: true,
            msg: info
        })
    } catch (e) {
        next(new ErrorHandler(e.message, e.status, 'sendChangeEmail'))
    }
};
