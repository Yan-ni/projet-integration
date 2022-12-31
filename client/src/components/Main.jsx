import { useContext } from 'react';
import { observer } from 'mobx-react';
import Map from './Map';
import ControlPanel from './ControlPanel';
import DataPanel from './DataPanel';

function Main({ StoreContext }) {
  const { mapStore, schoolStore } = useContext(StoreContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <main>
      <div className="panel">
        <ControlPanel />
        <DataPanel schools={schoolStore.schools} map={mapStore.map} />
      </div>
      <Map
        schools={schoolStore.schools}
        setMap={(map) => mapStore.setMap(map)}
      />
    </main>
  );
}

export default observer(Main);
