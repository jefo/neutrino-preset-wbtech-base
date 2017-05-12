const svg = require('./middlewares/svg');

module.exports = (neutrino) => {
  neutrino.use(svg);
}
