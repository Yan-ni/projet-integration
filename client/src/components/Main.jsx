import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon as LeafletIcon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import debounce from 'lodash.debounce';

const schoolIcon = LeafletIcon({
  iconUrl: new URL('../assets/school.png', import.meta.url).href,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

export default function Main() {
  const [schools, setSchools] = useState([]);
  const [displayedSchools, setDisplayedSchools] = useState(schools);
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/etablissements')
      .then((res) => {
        const { data } = res;
        setSchools(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setDisplayedSchools(schools);
  }, [schools]);

  const search = (searchPhrase) => {
    console.log(searchPhrase);
    if (searchPhrase.trim().length === 0) return setDisplayedSchools(schools);

    return setDisplayedSchools(
      schools.filter((school) => {
        if (
          school.sigle &&
          school.sigle.toLowerCase().search(searchPhrase.toLowerCase()) !== -1
        )
          return true;
        if (
          school.uo_lib &&
          school.uo_lib.toLowerCase().search(searchPhrase.toLowerCase()) !== -1
        )
          return true;
        return false;
      })
    );
  };

  return (
    <main>
      <div className="panel">
        <div className="panel-control">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Rechercher"
              onChange={debounce((e) => search(e.target.value), 500)}
            />
          </form>
        </div>
        <div className="panel-data">
          <ul>
            {displayedSchools.map((school) => (
              <li key={school.etablissement_id_paysage}>
                {school.sigle} - {school.uo_lib}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <MapContainer
        className="map"
        center={[46.2276, 2.2137]}
        zoom={6}
        minZoom={3}
        worldCopyJump
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup disableClusteringAtZoom={14} key={uuidv4()}>
          {displayedSchools.map((school) => {
            if (school.coordonnees !== undefined)
              return (
                <Marker
                  position={school.coordonnees}
                  icon={schoolIcon}
                  key={school.etablissement_id_paysage}
                >
                  <Popup>{school.uo_lib}</Popup>
                </Marker>
              );
            return null;
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </main>
  );
}
