const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constants');

module.exports = async (firstName, lastName, user_id) => {
    const UserModel = db.getModel(DB_TABLES.USER);

    await UserModel.update({
        firstName,
        lastName
    }, {
        where: {
            id: user_id
        }
    });
};
