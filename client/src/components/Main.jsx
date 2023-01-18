import { useContext } from 'react';
import { observer } from 'mobx-react';
import Map from './Map';
import ControlPanel from './ControlPanel';
import DataPanel from './DataPanel';
import SchoolDataPanel from './SchoolDataPanel';

function Main({ StoreContext }) {
  const { mapStore, schoolStore, filterStore } = useContext(StoreContext);

  const { selectedSchool } = schoolStore;

  return (
    <main>
      <div className={`panel ${selectedSchool && 'hide'}`}>
        <SchoolDataPanel mapStore={mapStore} schoolStore={schoolStore} />

        <ControlPanel schoolStore={schoolStore} filterStore={filterStore} />

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
