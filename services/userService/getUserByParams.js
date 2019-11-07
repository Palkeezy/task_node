const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constants');

module.exports = async (objForSearch) => {
    const UserModel = db.getModel(DB_TABLES.USER);

    const user = await UserModel.findOne({
        where: {
            id: objForSearch.id
        }
        }
    );

    return user && user.dataValues
};
