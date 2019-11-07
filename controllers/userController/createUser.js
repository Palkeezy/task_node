const {userService} = require('../../services');

module.exports = async (req, res) => {
    try {
        const user = req.body;

        await userService.createUser(user);

        res.status(201).end();
    } catch (e) {
        res.status(e.status).json({
            message: e.message,
            controller: e.controller
        })
    }
};



