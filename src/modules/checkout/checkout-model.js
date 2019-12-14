const { database } = require('../../configs');

/**
 * Get product by id.
 *
 * @param {String} id - Product id
 */
const getProductById = async id =>
  database('products')
    .where({ id })
    .then(([result]) => result);

module.exports = {
  getProductById
};
