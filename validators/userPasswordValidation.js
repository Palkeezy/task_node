const Joi = require('joi');

const {REG_EXP} = require('../constants');

module.exports = Joi.object().keys({
    password: Joi.string().min(8).max(50).regex(REG_EXP.strongPass).required(),
    newPassword: Joi.string().min(8).max(50).regex(REG_EXP.strongPass).required(),
    confirmNewPassword: Joi.string().min(8).max(50).regex(REG_EXP.strongPass).required()
});
