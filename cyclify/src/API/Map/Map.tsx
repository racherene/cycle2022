import React, { useLayoutEffect } from 'react';
import { useState } from 'react';
import { useMapEvents , MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import Form from './Form';
import axios from 'axios';

interface LatLng {

  lat:number;
  lng:number;
}

interface ILine {
  from_lat: number;
  from_lng: number;
  to_lat: number;
  to_lng: number;
  id: number;
}

function Map() {
  const DEFAULT_COORDINATE: [number, number] = [51.505, -0.09]
  const [latLngs, setLatLngs] = useState<ILine[]>([]);

  useLayoutEffect(() => {
    async function fetchData() {

      const res = await fetchDirectionsAndDistance();
      console.log(res);

      const arr = res.route.legs[0].maneuvers;
      const newArr = [];

      for (let i = 1; i < arr.length; i++) {
        const newObj = {
          from_lat: arr[i - 1].startPoint.lat,
          from_lng: arr[i - 1].startPoint.lng,
          id: i,
          to_lat: arr[i].startPoint.lat,
          to_lng: arr[i].startPoint.lng,
        };
        
        newArr.push(newObj);
      }

      setLatLngs(newArr);
    }

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return(
    <div className = "map">
        <Form/>
        <MapContainer center={DEFAULT_COORDINATE} zoom={13} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker /> 
            {
              latLngs.map((line) => {
                return (
                  <Polyline 
                    key={line.id} 
                    positions={[
                      [line.from_lat, line.from_lng],
                      [line.to_lat, line.to_lng],
                    ]} 
                    color={'red'}
                  />
                )
              })
            }
        </MapContainer>
    </div>
  );
}
 
const fetchDirectionsAndDistance = async () => {

    const bearerToken = "6xsya6AgkApAkH8nXh1uzMRC8vMFdJyd";
    const baseUrl = "http://www.mapquestapi.com/directions/v2/route";

    const results = await axios.get(baseUrl, {
        params: {
            key: bearerToken,
            from: process.env.REACT_APP_MOCK_FROM_ADDRESS,
            to: process.env.REACT_APP_MOCK_TO_ADDRESS,
        },
    });

    return results.data;
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