module.exports = (sequelize, DataTypes) => {
  const Etablissement = sequelize.define('Etablissement', {
    id: {
      type: DataTypes.CHAR(5),
      primaryKey: true,
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    sigle: {
      type: DataTypes.STRING(20),
    },
    uo_lib: {
      type: DataTypes.STRING(150),
    },
    uo_lib_en: {
      type: DataTypes.STRING(100),
    },
    uo_lib_officiel: {
      type: DataTypes.STRING(125),
    },

    siret: {
      type: DataTypes.CHAR(14),
    },
    siren: {
      type: DataTypes.CHAR(9),
    },

    type: {
      type: DataTypes.ENUM(
        'université',
        'école',
        'grand établissement',
        'autre établissement'
      ),
      allowNull: false,
    },
    secteur: {
      type: DataTypes.ENUM('public', 'privé'),
      allowNull: false,
    },
    annee_creation: {
      type: DataTypes.INTEGER,
    },
    annee_femeture: {
      type: DataTypes.INTEGER,
    },

    url: {
      type: DataTypes.STRING,
    },
    url_en: {
      type: DataTypes.STRING,
    },
    wikipedia_url: {
      type: DataTypes.STRING,
    },
    wikipedia_url_en: {
      type: DataTypes.STRING,
    },
    faebook_url: {
      type: DataTypes.STRING,
    },
    instagram_url: {
      type: DataTypes.STRING,
    },
    twitter_url: {
      type: DataTypes.STRING,
    },
    youtube_url: {
      type: DataTypes.STRING,
    },
    tumblr_url: {
      type: DataTypes.STRING,
    },
    flickr_url: {
      type: DataTypes.STRING,
    },
    pinterest_url: {
      type: DataTypes.STRING,
    },
    linkedin_url: {
      type: DataTypes.STRING,
    },
    vimeo_url: {
      type: DataTypes.STRING,
    },
    github_url: {
      type: DataTypes.STRING,
    },
  });

  return Etablissement;
};
