const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constants');

module.exports = async (req, res) => {
    try {
        const UserModel = db.getModel(DB_TABLES.USER);

        await UserModel.update({password},
            {where: {id}});

        res.json({
            success: true,
            msg: 'OK'
        })
    } catch (e) {
        res.status(e.status || 500)
            .json({
                success: false,
                msg: e.parent.sqlMessage || e.message
            })
    }
};
