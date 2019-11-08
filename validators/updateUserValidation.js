const Joi = require('joi');

module.exports = Joi.object().keys({
    firstName: Joi.string().alphanum().min(2).max(40).required(),
    lastName: Joi.string().alphanum().min(2).max(40).required(),
});
