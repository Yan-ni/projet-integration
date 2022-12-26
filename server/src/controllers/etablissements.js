const etablissements_data = require('../data/etablissements.json');

module.exports = {
  get: (req, res, next) => {
    res.json(etablissements_data);
  },
};
