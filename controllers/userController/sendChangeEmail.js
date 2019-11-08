const db = require('../../dataBase').getInstance();
const {sendEmailToChangePassword} = require('../../helpers');
const ErrorHandler = require('../../error/ErrorHandler');
const {tokenVerification} = require('../../helpers');

module.exports = async (req, res, next) => {
    try {
        const UserModel = db.getModel('User');
        const token = req.get('Authorization');
        const {id, email} = tokenVerification(token);
        const isPresent = await UserModel.findOne({
            where: {
                id, email
            }
        });
        if (!isPresent) throw new Error('User is not present');

        const info = await sendEmailToChangePassword(email);

        res.json({
            success: true,
            msg: info
        })
    } catch (e) {
        next(new ErrorHandler(e.message, e.status, 'sendChangeEmail'))
    }
};
