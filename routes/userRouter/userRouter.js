const router = require('express').Router();

const {userController} = require('../../controllers');
const {userMiddleware} = require('../../middlewares');

router.post('/', userMiddleware.checkUserIsPresentMiddleware, userController.createUser);
router.put('/:user_id', userMiddleware.getUserFromTokenMiddleware, userController.updateUser);
//router.get('/password', userController.sendChangeEmail);
//router.post('/password', userController.changeUserPassword);

module.exports = router;
