const { Op } = require('sequelize');
const { Etablissement } = require('../models');

module.exports = {
  get: async (req, res, next) => {
    const {
      search,
      type,
      secteur,
      pays,
      region,
      departement,
      commune,
      dateCreation,
    } = req.query;

    let where = {};

    if (search?.trim().length)
      where = {
        [Op.or]: [
          {
            uo_lib: { [Op.like]: `%${search.trim()}%` },
            sigle: { [Op.like]: `%${search.trim()}%` },
          },
        ],
      };
    if (type?.trim().length) where.type = type.trim().toLocaleLowerCase();
    if (secteur?.trim().length)
      where.secteur = secteur.trim().toLocaleLowerCase();

    const etablissements = await Etablissement.findAll({
      attributes: ['id', 'latitude', 'longitude', 'sigle', 'uo_lib'],
      where,
    });

    res.json(etablissements);
  },
};
