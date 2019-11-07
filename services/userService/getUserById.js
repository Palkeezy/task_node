const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constants');

module.exports = async (user_id) => {
    const UserModel = db.getModel(DB_TABLES.USER);

    const user = await UserModel.findByPk(user_id, {
        attributes: ['id', 'email']
    });

    return user && user.dataValues
};
