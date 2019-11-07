const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constants');

module.exports = async (userObject) => {
    const UserModel = db.getModel(DB_TABLES.USER);

    const user = await UserModel.create(userObject);

    return user && user.dataValues;
};
