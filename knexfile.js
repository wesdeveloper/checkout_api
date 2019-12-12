require('dotenv').config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      database: DB_NAME,
      password: DB_PASS
    },
    migrations: {
      tableName: 'migrations'
    },
    seeds: {
      directory: `${__dirname}/seeds/dev`
    },
    pool: {
      min: 1,
      max: 20
    }
  },
  test: {
    client: 'pg',
    connection: {
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      database: DB_NAME,
      password: DB_PASS
    },
    migrations: {
      tableName: 'migrations'
    },
    seeds: {
      directory: `${__dirname}/seeds/test`
    },
    pool: {
      min: 1,
      max: 20
    }
  }
};
