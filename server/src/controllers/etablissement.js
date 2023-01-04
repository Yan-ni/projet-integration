const { Etablissement } = require('../models');

module.exports = {
  get: (req, res, next) => {
    const { id } = req.params;

    Etablissement.findOne({
      where: { id },
    })
      .then((etablissements) => res.json(etablissements))
      .catch((error) => next(error));
  },
};
