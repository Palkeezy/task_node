const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constants');

module.exports = async (newPassword, userMail) => {
    const UserModel = db.getModel(DB_TABLES.USER);

    await UserModel.update({
        password: newPassword
    }, {
        where: {
            email: userMail
        }
    });
};
