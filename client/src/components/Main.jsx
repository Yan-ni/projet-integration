import { useEffect, useState } from 'react';
import axios from 'axios';
import Map from './Map';
import ControlPanel from './ControlPanel';
import DataPanel from './DataPanel';

const loadAPIData = (setSchools) => () => {
  axios
    .get('http://localhost:3000/api/etablissements')
    .then((res) => {
      const { data } = res;
      setSchools(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default function Main() {
  const [schools, setSchools] = useState([]);
  const [displayedSchools, setDisplayedSchools] = useState(schools);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(loadAPIData(setSchools), []);

  useEffect(() => setDisplayedSchools(schools), [schools]);

  return (
    <main>
      <div className="panel">
        <ControlPanel
          schools={schools}
          setDisplayedSchools={setDisplayedSchools}
        />
        <DataPanel displayedSchools={displayedSchools} />
      </div>
      <Map displayedSchools={displayedSchools} />
    </main>
  );
}
