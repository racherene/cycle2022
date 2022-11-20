import { useMapEvents, Popup, Marker } from "react-leaflet";
import { useState } from "react";
import { LatLng, ILine } from "./Map";

function LocationMarker({ startAddr }: { startAddr: ILine }) {
    const [position, setPosition] = useState<LatLng| null>(null);

    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        if (!startAddr) {
            setPosition(e.latlng as LatLng)
            map.flyTo(e.latlng, map.getZoom())
        } else {
            const newLocation = {
                lat: startAddr.from_lat,
                lng: startAddr.from_lng,
            };
            setPosition(newLocation);
            map.flyTo(newLocation, map.getZoom());
        }
      },
    });
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
}

export default LocationMarker;