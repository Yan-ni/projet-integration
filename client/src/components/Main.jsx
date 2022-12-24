import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon as LeafletIcon } from 'leaflet';
import etablissements from '../etablissements.json';

const schoolIcon = LeafletIcon({
  iconUrl: new URL('../assets/school.png', import.meta.url).href,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

export default function Main() {
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
        {etablissements.map((etablissement) => {
          if (etablissement.fields.coordonnees !== undefined)
            return (
              <>
                {/* <Marker
                  position={etablissement.fields.coordonnees}
                  key={etablissement.fields.etablissement_id_paysage}
                >
                  <Popup>{etablissement.fields.uo_lib}</Popup>
                </Marker> */}
                <Marker
                  position={etablissement.fields.coordonnees}
                  icon={schoolIcon}
                  key={etablissement.fields.etablissement_id_paysage}
                >
                  <Popup>{etablissement.fields.uo_lib}</Popup>
                </Marker>
              </>
            );
          return null;
        })}
      </MapContainer>
    </main>
  );
}
