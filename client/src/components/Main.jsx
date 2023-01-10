import { useContext } from 'react';
import { observer } from 'mobx-react';
import Map from './Map';
import ControlPanel from './ControlPanel';
import DataPanel from './DataPanel';
import SchoolDataPanel from './SchoolDataPanel';

function Main({ StoreContext }) {
  const { mapStore, schoolStore } = useContext(StoreContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const { selectedSchool } = schoolStore;

  return (
    <main>
      <div className={`panel ${selectedSchool && 'hide'}`}>
        <SchoolDataPanel mapStore={mapStore} schoolStore={schoolStore} />

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
