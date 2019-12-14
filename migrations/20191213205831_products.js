exports.up = knex =>
  knex.schema.createTable('products', table => {
    table
      .string('id')
      .notNullable()
      .primary();
    table.string('name').notNullable();
    table.float('price').notNullable();
  });

exports.down = knex => knex.schema.dropTable('products');
