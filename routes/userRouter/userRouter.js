const router = require('express').Router();

const {userController} = require('../../controllers');
const {userMiddleware} = require('../../middlewares');

router.post('/',
    userMiddleware.checkUserIsPresentMiddleware,
    userMiddleware.userValidationMiddleware,
    userController.createUser);
router.put('/:user_id',
    userMiddleware.getUserFromTokenMiddleware,
    userController.updateUser);
router.get('/password', userController.sendChangeEmail);
router.get('/password/:token', userController.refreshPassword);
router.put('/password/:token',
    userMiddleware.userPasswordValidationMiddleware,
    userController.changeUserPassword);

module.exports = router;
