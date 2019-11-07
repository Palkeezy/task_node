const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constants');

module.exports = async (email) => {
    const UserModel = db.getModel(DB_TABLES.USER);

    const user = await UserModel.findOne({
        where : {
            email: email
        }
    });

    return user && user.dataValues
};
