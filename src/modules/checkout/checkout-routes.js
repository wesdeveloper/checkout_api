const express = require('express');
const { schemas } = require('./checkout-schemas');
const { validateBody } = require('../../modules/helpers');
const checkoutController = require('./checkout-controller');

const router = express.Router();

router.post(
  '/checkout',
  validateBody(schemas.checkout),
  checkoutController.checkoutProducts
);

module.exports = router;
