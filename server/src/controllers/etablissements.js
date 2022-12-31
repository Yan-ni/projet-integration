const sequelize = require('sequelize');
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
        [sequelize.Op.or]: [
          sequelize.where(
            sequelize.fn('lower', sequelize.col('uo_lib')),
            sequelize.Op.like,
            `%${search.trim().toLowerCase()}%`
          ),
          sequelize.where(
            sequelize.fn('lower', sequelize.col('uo_lib_officiel')),
            sequelize.Op.like,
            `%${search.trim().toLowerCase()}%`
          ),
          sequelize.where(
            sequelize.fn('lower', sequelize.col('uo_lib_en')),
            sequelize.Op.like,
            `%${search.trim().toLowerCase()}%`
          ),
          sequelize.where(
            sequelize.fn('lower', sequelize.col('sigle')),
            sequelize.Op.like,
            `%${search.trim().toLowerCase()}%`
          ),
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
