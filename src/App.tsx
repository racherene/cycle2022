import React from 'react';
import './App.css';
import { useState } from 'react';
import { useMapEvents , MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Form from './components/form';
import "./components/form.css"
import Axios from 'axios';

interface LatLng {
  
  lat:number;
  lng:number;
}

function App() {
  const DEFAULT_COORDINATE: [number, number] = [51.505, -0.09]
  var map,
  dir;

map = L.map('map', {
  layers: MQ.mapLayer(),
  center: [ 38.895345, -77.030101 ],
  zoom: 15
});

dir = MQ.routing.directions();

dir.route({
  locations: [
    '1600 pennsylvania ave, washington dc',
    '935 pennsylvania ave, washington dc'
  ]
});

map.addLayer(MQ.routing.routeLayer({
  directions: dir,
  fitBounds: true
}));
 
  return(
    <div className = "map">
      <Form/>
       <MapContainer center={DEFAULT_COORDINATE} zoom={13} scrollWheelZoom={true}>
       
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
   
    <LocationMarker />
  </MapContainer>
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
      console.log(e)
      console.log(e.latlng.lat)
      console.log(e.latlng.lng)
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

export default App;
