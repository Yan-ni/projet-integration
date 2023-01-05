import { useContext } from 'react';
import { observer } from 'mobx-react';
import Map from './Map';
import ControlPanel from './ControlPanel';
import DataPanel from './DataPanel';

function Main({ StoreContext }) {
  const { mapStore, schoolStore } = useContext(StoreContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const { selectedSchool } = schoolStore;

  return (
    <main>
      <div className={`panel ${selectedSchool && 'hide'}`}>
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
            </>
          )}
        </div>

        <ControlPanel schoolStore={schoolStore} />
        <DataPanel schoolStore={schoolStore} map={mapStore.map} />
      </div>
      <Map
        schools={schoolStore.schools}
        setMap={(map) => mapStore.setMap(map)}
      />
    </main>
  );
}

export default observer(Main);
