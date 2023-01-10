/* eslint-disable */
const etablissements_data = require('../data/etablissements.json');

const { Etablissement, Effectif } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (const {
      etablissement_id_paysage,
      coordonnees,
      sigle,
      uo_lib,
      uo_lib_en,
      uo_lib_officiel,
      siret,
      siren,
      type_d_etablissement,
      secteur_d_etablissement,
      date_creation,
      date_fermeture,
      url,
      url_en,
      wikipedia,
      wikipedia_en,
      compte_facebook,
      compte_instagram,
      compte_twitter,
      compte_youtube,
      compte_tumblr,
      compte_flickr,
      compte_pinterest,
      compte_linkedin,
      compte_vimeo,
      compte_github,
      inscrits_2010,
      inscrits_2011,
      inscrits_2012,
      inscrits_2013,
      inscrits_2014,
      inscrits_2015,
      inscrits_2016,
      inscrits_2017,
    } of etablissements_data) {
      const etablissement = {
        id: etablissement_id_paysage,
        latitude: coordonnees ? Number(coordonnees[0]) : null,
        longitude: coordonnees ? Number(coordonnees[1]) : null,
        sigle,
        uo_lib,
        uo_lib_en,
        uo_lib_officiel,
        siret,
        siren,
        type: type_d_etablissement?.toLowerCase(),
        secteur: secteur_d_etablissement?.toLowerCase(),
        annee_creation: Number(date_creation),
        annee_femeture: date_fermeture ? Number(date_fermeture) : undefined,
        url,
        url_en,
        wikipedia_url: wikipedia,
        wikipedia_url_en: wikipedia_en,
        facebook_url: compte_facebook,
        instagram_url: compte_instagram,
        twitter_url: compte_twitter,
        youtube_url: compte_youtube,
        tumblr_url: compte_tumblr,
        flickr_url: compte_flickr,
        pinterest_url: compte_pinterest,
        linkedin_url: compte_linkedin,
        vimeo_url: compte_vimeo,
        github_url: compte_github,
      };

      try {
        await Etablissement.create(etablissement);
      } catch ({ errors }) {
        console.error(`couldn't add school of id : ${etablissement.id}`);
        console.log(errors?.map((error) => ` -> ${error.message}`).join('\n'));
        continue;
      }

      const ef_ins_2010 = Number(inscrits_2010);
      const ef_ins_2011 = Number(inscrits_2011);
      const ef_ins_2012 = Number(inscrits_2012);
      const ef_ins_2013 = Number(inscrits_2013);
      const ef_ins_2014 = Number(inscrits_2014);
      const ef_ins_2015 = Number(inscrits_2015);
      const ef_ins_2016 = Number(inscrits_2016);
      const ef_ins_2017 = Number(inscrits_2017);

      if (Number.isNaN(ef_ins_2010) !== true) {
        await Effectif.create({
          id: `${etablissement_id_paysage}-2010`,
          annee: 2010,
          nombre: ef_ins_2010,
          id_etablissement: etablissement_id_paysage,
        });
      }

      if (Number.isNaN(ef_ins_2011) !== true) {
        await Effectif.create({
          id: `${etablissement_id_paysage}-2011`,
          annee: 2011,
          nombre: ef_ins_2011,
          id_etablissement: etablissement_id_paysage,
        });
      }

      if (Number.isNaN(ef_ins_2012) !== true) {
        await Effectif.create({
          id: `${etablissement_id_paysage}-2012`,
          annee: 2012,
          nombre: ef_ins_2012,
          id_etablissement: etablissement_id_paysage,
        });
      }

      if (Number.isNaN(ef_ins_2013) !== true) {
        await Effectif.create({
          id: `${etablissement_id_paysage}-2013`,
          annee: 2013,
          nombre: ef_ins_2013,
          id_etablissement: etablissement_id_paysage,
        });
      }

      if (Number.isNaN(ef_ins_2014) !== true) {
        await Effectif.create({
          id: `${etablissement_id_paysage}-2014`,
          annee: 2014,
          nombre: ef_ins_2014,
          id_etablissement: etablissement_id_paysage,
        });
      }

      if (Number.isNaN(ef_ins_2015) !== true) {
        await Effectif.create({
          id: `${etablissement_id_paysage}-2015`,
          annee: 2015,
          nombre: ef_ins_2015,
          id_etablissement: etablissement_id_paysage,
        });
      }

      if (Number.isNaN(ef_ins_2016) !== true) {
        await Effectif.create({
          id: `${etablissement_id_paysage}-2016`,
          annee: 2016,
          nombre: ef_ins_2016,
          id_etablissement: etablissement_id_paysage,
        });
      }

      if (Number.isNaN(ef_ins_2017) !== true) {
        await Effectif.create({
          id: `${etablissement_id_paysage}-2017`,
          annee: 2017,
          nombre: ef_ins_2017,
          id_etablissement: etablissement_id_paysage,
        });
      }
    }
  },

  down: async (queryInterface, Sequelize) => {},
};
