/* eslint-disable no-param-reassign */
const etablissements_data = require('../data/etablissements.json');

const { Etablissement, Effectif } = require('../models');

module.exports = () => {
  const promises = [];
  etablissements_data.forEach(
    ({
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
      compte_tumbr,
      compte_flikr,
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
    }) => {
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
        faebook_url: compte_facebook,
        instagram_url: compte_instagram,
        twitter_url: compte_twitter,
        youtube_url: compte_youtube,
        tumblr_url: compte_tumbr,
        flickr_url: compte_flikr,
        pinterest_url: compte_pinterest,
        linkedin_url: compte_linkedin,
        vimeo_url: compte_vimeo,
        github_url: compte_github,
      };

      promises.push(
        new Promise((resolve) => {
          Etablissement.create(etablissement)
            .then(() => resolve())
            .catch((err) => {
              console.error(err);
              resolve();
            });
        })
      );

      inscrits_2010 = Number(inscrits_2011);
      inscrits_2011 = Number(inscrits_2011);
      inscrits_2012 = Number(inscrits_2012);
      inscrits_2013 = Number(inscrits_2013);
      inscrits_2014 = Number(inscrits_2014);
      inscrits_2015 = Number(inscrits_2015);
      inscrits_2016 = Number(inscrits_2016);
      inscrits_2017 = Number(inscrits_2017);

      if (Number.isNaN(inscrits_2010) !== true) {
        promises.push(
          new Promise((resolve) => {
            Effectif.create({
              annee: 2010,
              nombre: inscrits_2010,
              id_etablissement: etablissement_id_paysage,
            })
              .then(() => resolve())
              .catch((err) => {
                console.error(err);
                resolve();
              });
          })
        );
      }

      if (Number.isNaN(inscrits_2011) !== true) {
        promises.push(
          new Promise((resolve) => {
            Effectif.create({
              annee: 2011,
              nombre: inscrits_2011,
              id_etablissement: etablissement_id_paysage,
            })
              .then(() => resolve())
              .catch((err) => {
                console.error(err);
                resolve();
              });
          })
        );
      }

      if (Number.isNaN(inscrits_2012) !== true) {
        promises.push(
          new Promise((resolve) => {
            Effectif.create({
              annee: 2012,
              nombre: inscrits_2012,
              id_etablissement: etablissement_id_paysage,
            })
              .then(() => resolve())
              .catch((err) => {
                console.error(err);
                resolve();
              });
          })
        );
      }

      if (Number.isNaN(inscrits_2013) !== true) {
        promises.push(
          new Promise((resolve) => {
            Effectif.create({
              annee: 2013,
              nombre: inscrits_2013,
              id_etablissement: etablissement_id_paysage,
            })
              .then(() => resolve())
              .catch((err) => {
                console.error(err);
                resolve();
              });
          })
        );
      }

      if (Number.isNaN(inscrits_2014) !== true) {
        promises.push(
          new Promise((resolve) => {
            Effectif.create({
              annee: 2014,
              nombre: inscrits_2014,
              id_etablissement: etablissement_id_paysage,
            })
              .then(() => resolve())
              .catch((err) => {
                console.error(err);
                resolve();
              });
          })
        );
      }

      if (Number.isNaN(inscrits_2015) !== true) {
        promises.push(
          new Promise((resolve) => {
            Effectif.create({
              annee: 2015,
              nombre: inscrits_2015,
              id_etablissement: etablissement_id_paysage,
            })
              .then(() => resolve())
              .catch((err) => {
                console.error(err);
                resolve();
              });
          })
        );
      }

      if (Number.isNaN(inscrits_2016) !== true) {
        promises.push(
          new Promise((resolve) => {
            Effectif.create({
              annee: 2016,
              nombre: inscrits_2016,
              id_etablissement: etablissement_id_paysage,
            })
              .then(() => resolve())
              .catch((err) => {
                console.error(err);
                resolve();
              });
          })
        );
      }

      if (Number.isNaN(inscrits_2017) !== true) {
        promises.push(
          new Promise((resolve) => {
            Effectif.create({
              annee: 2017,
              nombre: inscrits_2017,
              id_etablissement: etablissement_id_paysage,
            })
              .then(() => resolve())
              .catch((err) => {
                console.error(err);
                resolve();
              });
          })
        );
      }
    }
  );

  return Promise.all(promises);
};
