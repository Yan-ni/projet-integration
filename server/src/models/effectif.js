module.exports = (sequelize, DataTypes) => {
  const Effectif = sequelize.define('Effectif', {
    id: {
      type: DataTypes.CHAR(10),
      primaryKey: true,
    },
    annee: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Effectif.associate = ({ Etablissement }) =>
    Effectif.belongsTo(Etablissement, { foreignKey: 'id_etablissement' });

  return Effectif;
};
