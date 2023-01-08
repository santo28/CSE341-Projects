const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Marvin Santos');
});

module.exports = routes;
