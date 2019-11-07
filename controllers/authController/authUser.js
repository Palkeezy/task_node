const {userService} = require('../../services');
const ErrorHandler = require('../../error/ErrorHandler');
const {tokenGenerator} = require('../../helpers');

module.exports = async (req, res) => {
    try {
        const {email, password} = req.body;

        const isUserPresent = await userService.getUserByParams({email, password});

        if (!isUserPresent) {
            throw new ErrorHandler('User is not present', 404, 'authUser');
        }

        const token = tokenGenerator(isUserPresent);

        res.json({
            token: token
        });

    } catch (e) {
        res.status(e.status).json({
            message: e.message,
            controller: e.controller || 'authUser'
        })
    }
};
