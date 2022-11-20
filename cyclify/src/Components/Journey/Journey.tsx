import React, {useState} from "react";
import Map from "../../API/Map/Map";
import AddressInput from "./AddressInput";
import ModeInput from "./ModeInput";
import Results from "./Results";

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
            <div className="background-overlay">
                <h2 className="text text-secondary-dark header">Create your journey!</h2>
                <div className="input-split">
                    <AddressInput propStartAddress={propStartAddress} propEndAddress={propEndAddress} propDistance={propDistance}></AddressInput>
                    <ModeInput></ModeInput>
                </div>
                <p style={{color:"white"}}>{startAddress}</p>
                <p style={{color:"white"}}>{endAddress}</p>
                <p style={{color:"white"}}>{distance}</p></div>
            <div className="background">
                
            </div>
            <div className="journey-results">
                <Map></Map>
                <div className="results-container">
                    { <Results/> }
                </div>

            </div>
            
        </div>
    );
}