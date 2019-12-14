exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('products').insert([
        { id: 'classic', name: 'Classic', price: 269.99 },
        { id: 'standout', name: 'Standout', price: 322.99 },
        { id: 'premium', name: 'Premium', price: 394.99 }
      ]);
    });
};
