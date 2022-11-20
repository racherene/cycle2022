import { useState, useEffect } from "react";
import { useMapEvents, Popup, Marker } from "react-leaflet";
import { ILine, LatLng } from "../Map";

const useMapConfig = ({ startAddr, setPosition }: { startAddr: ILine, setPosition: any }) => {

    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            fn(e);
        },
    });

    const fn = (e: any = null) => {
        if (!startAddr && e) {
            setPosition(e.latlng as LatLng);
            map.flyTo(e.latlng, map.getZoom())
            // console.log('flying to', e);
        } else {
            const newLocation = {
                lat: startAddr?.from_lat || 51.909,
                lng: startAddr?.from_lng || -13,
            };
            setPosition(newLocation);
            map.flyTo(newLocation, map.getZoom());
            // console.log('flying to', newLocation);
        }
    }

    useEffect(() => {
        fn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startAddr]);
};

export default useMapConfig;
