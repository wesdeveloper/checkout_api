const { assert } = require('chai');
const checkoutServices = require('../../src/modules/checkout/checkout-services');

describe('Checkout - Unit tests', () => {
  it('Should setup checkout setting price rules', async () => {
    const expect = { customer: 'UNILEVER', products: [] };
    const co = checkoutServices({ customer: 'UNILEVER', products: [] });

    assert.deepStrictEqual(await co.getPriceRules(), expect);
  });

  it('Should add an item on checkout list', async () => {
    const co = checkoutServices({ customer: 'UNILEVER' });
    await co.addItem('classic');
    const itens = await co.getItens();
    assert.deepEqual(itens.length, 1);
  });
});
