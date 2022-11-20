import React, { useEffect, useLayoutEffect } from 'react';
import { useState } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import Form from './Form';
import axios from 'axios';
import LocationMarker from './LocationMarker';
import useMapConfig from './hooks/useMapConfig';

export interface LatLng {

  lat:number;
  lng:number; 
}

export interface ILine {
  from_lat: number;
  from_lng: number;
  to_lat: number;
  to_lng: number;
  id: number;
}

function Map() {
  const DEFAULT_COORDINATE: [number, number] = [51.505, -0.09]
  const [center, setCenter] = useState<LatLng | undefined>({
    lat: 0,
    lng: 0,
  });
  const [latLngs, setLatLngs] = useState<ILine[]>([]);
  const [distance, setDistance] = useState(0);
  const [startAddr, setStartAddr] = useState("");
  const [endAddr, setEndAddr] = useState("");

  const setPoints = (e: Event, start: string, end: string) => {
    e.preventDefault();

    setStartAddr(start);
    setEndAddr(end);
  }

  const fetchDirectionsAndDistance = async () => {

    const bearerToken = process.env.REACT_APP_MAPQUEST_API_KEY;
    const baseUrl = "http://www.mapquestapi.com/directions/v2/route";

    const results = await axios.get(baseUrl, {
        params: {
            key: bearerToken,
            from: startAddr || process.env.REACT_APP_MOCK_FROM_ADDRESS,
            to: endAddr || process.env.REACT_APP_MOCK_TO_ADDRESS,
        },
    });

    return results.data;
  }
  

  useLayoutEffect(() => {
    async function fetchData() {

      const res = await fetchDirectionsAndDistance();
      console.log(res);

      setDistance(res.route.distance);

      const arr = res.route.legs[0].maneuvers;
      setCenter(arr[arr.length - 1].startPoint as LatLng);
      DEFAULT_COORDINATE[0] = arr[arr.length - 1].startPoint.lat;
      DEFAULT_COORDINATE[1] = arr[arr.length - 1].startPoint.lng;
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
  }, [startAddr, endAddr]);

  return(
    <div className = "map">
        <Form setPoints={setPoints} />
        <div>distance travelled: {distance} km</div>
        <MapContainer center={DEFAULT_COORDINATE} zoom={13} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker startAddr={latLngs[0]}/> 
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
    </div>
  );
}


export default Map;