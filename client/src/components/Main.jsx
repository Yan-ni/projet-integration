import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon as LeafletIcon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const schoolIcon = LeafletIcon({
  iconUrl: new URL('../assets/school.png', import.meta.url).href,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

export default function Main() {
  const [etablissements, setEtablissements] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/etablissements')
      .then((res) => {
        const { data } = res;
        setEtablissements(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main>
      <div className="content">
        <h1>Etablissements FR</h1>
      </div>
      <MapContainer
        className="map"
        center={[46.2276, 2.2137]}
        zoom={6}
        minZoom={3}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup disableClusteringAtZoom={14} key={uuidv4()}>
          {etablissements.map((etablissement) => {
            if (etablissement.coordonnees !== undefined)
              return (
                <Marker
                  position={etablissement.coordonnees}
                  icon={schoolIcon}
                  key={etablissement.etablissement_id_paysage}
                >
                  <Popup>{etablissement.uo_lib}</Popup>
                </Marker>
              );
            return null;
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </main>
  );
}
