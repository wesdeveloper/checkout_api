require('dotenv').config();

const fs = require('fs');
const path = require('path');
const cors = require('cors');
const assert = require('assert');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

const { database } = require('./configs');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

// Load routes
const modulesPath = path.resolve(__dirname, 'modules');
fs.readdirSync(modulesPath).forEach(folder => {
  fs.readdirSync(path.resolve(modulesPath, folder))
    .filter(file => file.includes('routes'))
    .forEach(file => {
      app.use('/api', require(path.resolve(modulesPath, folder, file)));
    });
});

app.get('/api', (req, res) => res.send({ message: 'Welcome to the API' }));

// catch 404
app.use((req, res) => res.status(404).send());

// error handlers
app.use((err, req, res) => {
  // set locals, only providing error in development
  const error = app.get('env') === 'development' ? err : {};
  console.error(err);
  const status = err.status || 500;

  // respond to client
  return res.status(status).json(error);
});

const main = async () => {
  try {
    // Start the database connection
    const {
      rows: [{ result }]
    } = await database.raw('select 1+1 as result');
    assert.equal(result, 2);
    console.info('Databases sucessfull connection!');
  } catch (e) {
    console.error(`Database connection failed: ${e.message}`);
    process.exit(0);
  }

  const handleCloseServer = async () => {
    try {
      // Call db close methods
    } catch (e) {
      console.error(`Close database connections error: ${e.message}`);
    } finally {
      console.error('Server is closed!');
      process.exit(0);
    }
  };

  // do something when app is closing
  process.on('SIGTERM', handleCloseServer);

  // catches ctrl+c event
  process.on('SIGINT', handleCloseServer);

  // catches "kill pid" (for example: nodemon restart)
  process.on('SIGUSR1', handleCloseServer);
  process.on('SIGUSR2', handleCloseServer);

  return app;
};

module.exports = main();
