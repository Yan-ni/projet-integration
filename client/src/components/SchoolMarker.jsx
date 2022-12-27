import { Marker } from 'react-leaflet';
import { icon as LeafletIcon } from 'leaflet';

const schoolIcon = LeafletIcon({
  iconUrl: new URL('../assets/school.png', import.meta.url).href,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

export default function SchoolMarker({ position, children }) {
  return (
    <Marker position={position} icon={schoolIcon}>
      {children}
    </Marker>
  );
}
