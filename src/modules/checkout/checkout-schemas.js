const Joi = require('joi');

const schemas = {
  checkout: Joi.object()
    .keys({
      customer: Joi.string(),
      itens: Joi.array().required()
    })
    .options({ stripUnknown: true })
};

module.exports = { schemas };
