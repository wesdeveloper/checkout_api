const { assert } = require('chai');
const checkoutServices = require('../../src/modules/checkout/checkout-services');

describe('Checkout - Integration tests', () => {
  describe('Validate single checkout', () => {
    it('Should add an classic item with default price rules and get total of checkout', async () => {
      const co = checkoutServices({ customer: 'Uniliver' });
      await co.addItem('classic');
      const total = await co.getTotal();
      assert.deepEqual(total, 269.99);
    });

    it('Should add an standout item with default price rules and get total of checkout', async () => {
      const co = checkoutServices({ customer: 'Uniliver' });
      await co.addItem('standout');
      const total = await co.getTotal();
      assert.deepEqual(total, 322.99);
    });

    it('Should add an premium item with default price rules and get total of checkout', async () => {
      const co = checkoutServices({ customer: 'Uniliver' });
      await co.addItem('premium');
      const total = await co.getTotal();
      assert.deepEqual(total, 394.99);
    });
  });

  describe('DEFAULT', () => {
    it('Sould get an default checkout', async () => {
      const co = checkoutServices({ customer: 'default' });
      await co.addItem('classic');
      await co.addItem('standout');
      await co.addItem('premium');
      const total = await co.getTotal();
      assert.deepEqual(total, 987.97);
    });
  });
  describe('UNILEVER', () => {
    it('Sould get an Unilever checkout', async () => {
      const co = checkoutServices({
        classic: {
          Unilever: {
            type: 'group',
            qtd: 3,
            payFor: 2
          }
        }
      });

      await co.setCustomer('Unilever');
      await co.addItem('classic');
      await co.addItem('classic');
      await co.addItem('classic');
      await co.addItem('premium');
      const total = await co.getTotal();
      assert.deepEqual(total, 934.97);
    });
  });

  describe('Apple', () => {
    it('Sould get an Apple checkout', async () => {
      const co = checkoutServices({
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
        }
      });

      await co.setCustomer('Apple');
      await co.addItem('standout');
      await co.addItem('standout');
      await co.addItem('standout');
      await co.addItem('premium');
      const total = await co.getTotal();
      assert.deepEqual(total, 1294.96);
    });
  });

  describe('NIKE', () => {
    it('Sould get an Nike checkout', async () => {
      const co = checkoutServices({
        premium: {
          Nike: {
            type: 'discount',
            price: 379.99,
            min: 4
          }
        }
      });

      await co.setCustomer('Nike');
      await co.addItem('premium');
      await co.addItem('premium');
      await co.addItem('premium');
      await co.addItem('premium');
      const total = await co.getTotal();
      assert.deepEqual(total, 1519.96);
    });
  });
});
