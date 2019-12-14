const checkoutModel = require('./checkout-model');

const checkout = (data = {}) => {
  const priceRules = { ...data };
  const itens = [];
  let customer;

  const calculatePrice = (product, qtd, price) => {
    const rules = priceRules[product];

    if (rules) {
      const rule = rules[customer];
      if (rule) {
        if (rule.type === 'group') {
          if (qtd >= rule.qtd) {
            const itensGrouped = rule.qtd - (qtd % rule.qtd);
            const groupedPrice =
              itensGrouped * (price * (rule.payFor / rule.qtd));
            const normalPrice = (qtd % rule.qtd) * price;

            return normalPrice + groupedPrice;
          }
        } else if (rule.type === 'discount' && qtd >= rule.min) {
          return qtd * rule.price;
        }
      }
      return qtd * price;
    } else {
      return qtd * price;
    }
  };

  const getTotal = async () => {
    const checkoutList = itens.reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr] += 1;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});

    const productsPrice = await Promise.all(
      Object.keys(checkoutList).map(async item => {
        const product = await checkoutModel.getProductById(item);
        return calculatePrice(item, checkoutList[item], product.price);
      })
    );

    const total = productsPrice.reduce((acc, curr) => (acc += curr), 0);
    return total;
  };

  const addItem = async item => itens.push(item);
  const getPriceRules = async () => priceRules;
  const getItens = async () => itens;
  const setCustomer = async data => {
    customer = data;
  };

  return {
    setCustomer,
    getPriceRules,
    addItem,
    getItens,
    getTotal
  };
};

module.exports = checkout;
