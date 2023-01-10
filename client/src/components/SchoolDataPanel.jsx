import LinksIcons from './LinksIcons';

export default function SchoolDataPanel({ mapStore, schoolStore }) {
  const { selectedSchool } = schoolStore;

  return (
    <div className={`selected-school ${selectedSchool && 'show'}`}>
      {selectedSchool && (
        <>
          <button
            type="button"
            onClick={() => {
              mapStore.center();
              schoolStore.unselectSchool();
            }}
          >
            close
          </button>
          <h2>{selectedSchool.uo_lib}</h2>
          <p>EN : {selectedSchool.uo_lib_en}</p>
          <p>sigle : {selectedSchool.sigle}</p>
          <br />
          <p>année de création : {selectedSchool.annee_creation}</p>
          <br />
          <p>type : {selectedSchool.type}</p>
          <p>secteur : {selectedSchool.secteur}</p>
          <br />
          <p>siret : {selectedSchool.siret}</p>
          <p>siren : {selectedSchool.siren}</p>
          <LinksIcons
            links={
              /* filter the object and leaves only entries with _url in the key */
              Object.keys(selectedSchool)
                .filter((key) => key.includes('_url'))
                .reduce((cur, key) => {
                  return Object.assign(cur, { [key]: selectedSchool[key] });
                }, {})
            }
          />
        </>
      )}
    </div>
  );
}
