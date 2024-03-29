import { MapContainer, TileLayer, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { v4 as uuidv4 } from 'uuid';
import SchoolMarker from './SchoolMarker';

export default function Map({ schools, setMap }) {
  return (
    <MapContainer
      className="map"
      center={[46.2276, 2.2137]}
      zoom={6}
      minZoom={3}
      ref={setMap}
      worldCopyJump
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup disableClusteringAtZoom={14} key={uuidv4()}>
        {schools.map((school) => {
          return school.latitude && school.longitude ? (
            <SchoolMarker
              position={[school.latitude, school.longitude]}
              key={school.id}
            >
              <Popup>{school.uo_lib}</Popup>
            </SchoolMarker>
          ) : null;
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
