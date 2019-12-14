const express = require('express');
const checkoutController = require('./checkout-controller');

const router = express.Router();

router.post('/checkout', checkoutController.checkoutProducts);

module.exports = router;
