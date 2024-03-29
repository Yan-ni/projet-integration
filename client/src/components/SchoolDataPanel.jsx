import { Chart } from 'react-google-charts';
import LinksIcons from './LinksIcons';
import BackArrowNavigation from '../assets/back-arrow-navigation.svg';

export default function SchoolDataPanel({ mapStore, schoolStore }) {
  const { selectedSchool } = schoolStore;

  return (
    <div className={`selected-school ${selectedSchool ? 'show' : 'hide'}`}>
      {selectedSchool && (
        <>
          <button
            type="button"
            onClick={() => {
              mapStore.center();
              schoolStore.unselectSchool();
            }}
          >
            <img src={BackArrowNavigation} alt="go back" />
          </button>
          <h2>{selectedSchool.uo_lib}</h2>
          <p>
            {selectedSchool.annee_creation} -
            {selectedSchool.annee_femeture || " aujourd'hui"}
          </p>

          <p>EN : {selectedSchool.uo_lib_en}</p>
          <p>sigle : {selectedSchool.sigle}</p>
          <br />
          <br />
          <p>type : {selectedSchool.type}</p>
          <p>secteur : {selectedSchool.secteur}</p>
          <br />
          <p>siret : {selectedSchool.siret}</p>
          <p>siren : {selectedSchool.siren}</p>
          {selectedSchool.Effectifs.length !== 0 && (
            <Chart
              chartType="Bar"
              width="100%"
              height="400px"
              data={[
                ['Année', 'Effectifs'],
                ...selectedSchool.Effectifs.map(({ annee, nombre }) => [
                  String(annee),
                  nombre,
                ]),
              ]}
            />
          )}
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
