const etablissements_data = require('../data/etablissements.json');

module.exports = {
  get: (req, res, next) => {
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

    let etablissements;

    if (
      search ||
      type ||
      secteur ||
      pays ||
      region ||
      departement ||
      commune ||
      dateCreation
    )
      etablissements = etablissements_data.filter((etablissement) => {
        if (
          type?.length &&
          etablissement?.type_d_etablissement?.toLowerCase() !==
            type?.toLowerCase()
        )
          return false;

        if (
          secteur?.length &&
          etablissement?.secteur_d_etablissement?.toLowerCase() !==
            secteur?.toLowerCase()
        )
          return false;

        if (
          pays?.length &&
          etablissement?.pays_etranger_acheminement?.toLowerCase() !==
            pays?.toLowerCase()
        )
          return false;

        if (
          region?.length &&
          etablissement?.reg_nom?.toLowerCase() !== region?.toLowerCase()
        )
          return false;

        if (
          departement?.length &&
          etablissement?.dep_nom?.toLowerCase() !== departement?.toLowerCase()
        )
          return false;

        if (
          commune?.length &&
          etablissement?.com_nom?.toLowerCase() !== commune?.toLowerCase()
        )
          return false;

        if (search?.length)
          return !(
            etablissement?.sigle
              ?.toLocaleLowerCase()
              .search(search.toLocaleLowerCase()) === -1 &&
            etablissement?.uo_lib
              ?.toLocaleLowerCase()
              .search(search.toLocaleLowerCase()) === -1 &&
            etablissement?.uo_lib_en
              ?.toLocaleLowerCase()
              .search(search.toLocaleLowerCase()) === -1 &&
            etablissement?.uo_lib_officiel
              ?.toLocaleLowerCase()
              .search(search.toLocaleLowerCase()) === -1
          );

        return true;
      });
    else etablissements = etablissements_data;

    // etablissements = etablissements.map(
    //   ({
    //     etablissement_id_paysage,
    //     coordonnees,
    //     sigle,
    //     uo_lib,
    //     uo_lib_officiel,
    //     uo_lib_en,
    //   }) => ({
    //     etablissement_id_paysage,
    //     coordonnees,
    //     sigle,
    //     uo_lib,
    //     uo_lib_officiel,
    //     uo_lib_en,
    //   })
    // );

    res.json(etablissements);
  },
};
