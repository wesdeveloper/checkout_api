const checkoutServices = require('./checkout-services');

// PrincingRules will be loaded of another place in the future
const pricingRules = {
  classic: {
    Unilever: {
      type: 'group',
      qtd: 3,
      payFor: 2
    }
  },
  standout: {
    Apple: {
      type: 'discount',
      price: 299.99,
      min: 1
    }
  },
  premium: {
    Nike: {
      type: 'discount',
      price: 379.99,
      min: 4
    }
  }
};

const checkoutProducts = async (req, res) => {
  try {
    const { customer, itens } = req.payload.body;

    const co = checkoutServices(pricingRules);
    await co.setCustomer(customer);
    await Promise.all(itens.map(async item => await co.addItem(item)));
    const total = await co.getTotal();

    return res.status(201).send({ total });
  } catch (e) {
    console.error('checkoutProducts:', e);
    return res.status(500).send();
  }
};

module.exports = { checkoutProducts };
