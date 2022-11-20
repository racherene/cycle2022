import { useState, useEffect } from "react";
import { useMapEvents, Popup, Marker } from "react-leaflet";
import { ILine, LatLng } from "../Map";

const useMapConfig = ({ startAddr, setPosition }: { startAddr: ILine, setPosition: any }) => {

    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            if (!startAddr) {
                setPosition(e.latlng as LatLng);
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
};

export default useMapConfig;
