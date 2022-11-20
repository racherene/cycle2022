import { useMapEvents, Popup, Marker } from "react-leaflet";
import { useEffect, useState } from "react";
import { LatLng, ILine } from "./Map";
import useMapConfig from "./hooks/useMapConfig";

function LocationMarker({ startAddr, changed, setChanged }: { 
  startAddr: ILine, 
  changed: Boolean,
  setChanged: Function 
}) {
    const [position, setPosition] = useState<LatLng| null>(null);

    useMapConfig({ startAddr, setPosition });

    useEffect(() => {
      setPosition(position);
    }, [position]);
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
}

export default LocationMarker;