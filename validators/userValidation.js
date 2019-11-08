const Joi = require('joi');

const {REG_EXP} = require('../constants');

module.exports = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(50).regex(REG_EXP.strongPass).required(),
    firstName: Joi.string().alphanum().min(2).max(40).required(),
    lastName: Joi.string().alphanum().min(2).max(40).required(),
});
