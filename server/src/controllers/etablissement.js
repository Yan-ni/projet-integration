const { Etablissement, Effectif } = require('../models');

module.exports = {
  get: (req, res, next) => {
    const { id } = req.params;

    Etablissement.findOne({
      where: { id },
      include: Effectif,
    })
      .then((etablissements) => res.json(etablissements))
      .catch((error) => next(error));
  },
};
