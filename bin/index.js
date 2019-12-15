const ip = require('ip');

const api = require('../src');

const PORT = process.env.PORT || 4000;
(async () => {
  console.info('Starting server...');

  const app = await api;
  app.listen(PORT, () =>
    console.info(
      `Server is running at port ${PORT}, see more about the application on: http://${ip.address()}:${PORT}/api/docs`
    )
  );
})();
