const db = require('../../dataBase').getInstance();
const {sendEmailChangePassword} = require('../../helpers');
const ErrorHandler = require('../../error/ErrorHandler');

module.exports = async (req, res, next) => {
    try {
        const UserModel = db.getModel('User');
        const {id, email} = req.user;
        const isPresent = await UserModel.findOne({
            where: {
                id, email
            }
        });
        if (!isPresent) throw new Error('User is not present');

        const info = await sendEmailChangePassword(id);

        res.json({
            success: true,
            msg: info
        })
    } catch (e) {
        next(new ErrorHandler(e.message, e.status, 'sendChangeEmail'))
    }
};
