import React, {useState} from "react";
import Map from "../../API/Map/Map";
import AddressInput from "./AddressInput";
import ModeInput from "./ModeInput";

export default function Home() {
    // Define state variables
    const [startAddress, setStartAddress] = useState<undefined | string>('');
    const [endAddress, setEndAddress] = useState<undefined | string>('');
    const [distance, setDistance] = useState<undefined | number>();
    // Handlers for when state variables change
    function propStartAddress(address: string) {
        setStartAddress(address);
    }
    function propEndAddress(address: string) {
        setEndAddress(address);
    }
    function propDistance(distance: number) {
        setDistance(distance);
    }

    return (
        <div className="journey">
            <div className="background">
                <h2>Create your journey!</h2>
                <div className="input-split">
                    <AddressInput propStartAddress={propStartAddress} propEndAddress={propEndAddress} propDistance={propDistance}></AddressInput>
                    <ModeInput></ModeInput>
                </div>
                <p>{startAddress}</p>
                <p>{endAddress}</p>
                <p>{distance}</p>
            </div>
            <div className="results">
                <div className="map-container">
                    <Map></Map>
                </div>
                <div className="results-container">
                    Results
                </div>

            </div>
            <p>{startAddress}</p>
            <p>{endAddress}</p>
            <p>{distance}</p>
        </div>
    );
}