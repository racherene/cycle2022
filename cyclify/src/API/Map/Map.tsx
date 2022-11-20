import React from 'react';
import { useState } from 'react';
import { useMapEvents , MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Form from './Form';
import Axios from 'axios';

interface LatLng {

  lat:number;
  lng:number; 
}

function Map() {
  const DEFAULT_COORDINATE: [number, number] = [51.505, -0.09]

  return(
    <div className = "map">
        <Form/>
        <div className='map-container'>
        <MapContainer center={DEFAULT_COORDINATE} zoom={13} scrollWheelZoom={true}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker /> 
        </MapContainer>
        </div>
    </div>
  );
}
function LocationMarker() {
  const [position, setPosition] = useState<LatLng| null>(null);
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng as LatLng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default Map;