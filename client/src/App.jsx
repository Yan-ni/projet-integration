import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon as LeafletIcon } from 'leaflet';
import etablissements from './etablissements.json';

const schoolIcon = LeafletIcon({
  iconUrl: new URL('./assets/school.png', import.meta.url).href,
  iconSize: [40, 40],
  iconAnchor: [20, 0],
  popupAnchor: [0, 0],
});

function App() {
  return (
    <div className="app">
      <h1>Hello - Client</h1>
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
        {etablissements.map((etablissement) => {
          if (etablissement.fields.coordonnees !== undefined)
            return (
              <Marker
                position={etablissement.fields.coordonnees}
                icon={schoolIcon}
                key={etablissement.fields.etablissement_id_paysage}
              >
                <Popup>{etablissement.fields.uo_lib}</Popup>
              </Marker>
            );
          return null;
        })}
      </MapContainer>
    </div>
  );
}

export default App;
