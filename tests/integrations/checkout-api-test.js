const { assert } = require('chai');
const supertest = require('supertest');
const app = require('../../src');
const checkoutServices = require('../../src/modules/checkout/checkout-services');

describe('Checkout API - Integration tests', async () => {
  const request = supertest(await app);
  describe('Validate single checkout', () => {
    it('Should add an classic item with default price rules and get total of checkout', async () => {
      const { status, body } = await request.post('/api/checkout').send({
        itens: ['classic']
      });

      assert.deepEqual(status, 201);
      assert.deepEqual(body.total, 269.99);
    });

    it('Should add an standout item with default price rules and get total of checkout', async () => {
      const { status, body } = await request.post('/api/checkout').send({
        customer: 'Unilever',
        itens: ['standout']
      });

      assert.deepEqual(status, 201);
      assert.deepEqual(body.total, 322.99);
    });

    it('Should add an premium item with default price rules and get total of checkout', async () => {
      const { status, body } = await request.post('/api/checkout').send({
        customer: 'Unilever',
        itens: ['premium']
      });

      assert.deepEqual(status, 201);
      assert.deepEqual(body.total, 394.99);
    });
  });

  describe('DEFAULT', () => {
    it('Sould add an default checkout', async () => {
      const { status, body } = await request.post('/api/checkout').send({
        customer: 'default',
        itens: ['classic', 'standout', 'premium']
      });

      assert.deepEqual(status, 201);
      assert.deepEqual(body.total, 987.97);
    });
  });

  describe('UNILEVER', () => {
    it('Sould add an Unilever checkout', async () => {
      const { status, body } = await request.post('/api/checkout').send({
        customer: 'Unilever',
        itens: ['classic', 'classic', 'classic', 'premium']
      });

      assert.deepEqual(status, 201);
      assert.deepEqual(body.total, 934.97);
    });
  });

  describe('APPLE', () => {
    it('Sould add an Apple checkout', async () => {
      const { status, body } = await request.post('/api/checkout').send({
        customer: 'Apple',
        itens: ['standout', 'standout', 'standout', 'premium']
      });

      assert.deepEqual(status, 201);
      assert.deepEqual(body.total, 1294.96);
    });
  });

  describe('NIKE', () => {
    it('Sould add an Nike checkout', async () => {
      const { status, body } = await request.post('/api/checkout').send({
        customer: 'Nike',
        itens: ['premium', 'premium', 'premium', 'premium']
      });

      assert.deepEqual(status, 201);
      assert.deepEqual(body.total, 1519.96);
    });
  });
});
