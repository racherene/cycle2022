import React, {useState} from "react";
import Map from "../../API/Map/Map";
import AddressInput from "./AddressInput";
import ModeInput from "./ModeInput/ModeInput";
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

    function propInputs(event: any, start: string, end: string, dist: number) {
        event.preventDefault();

        propStartAddress(start as string);
        propEndAddress(end as string);
        propDistance(dist as number);
    }

    return (
        <div className="journey">
            <div className="background-overlay">
                <h2 className="text text-secondary-dark header">Create your journey!</h2>
                <div className="input-split">
                    <AddressInput propInputs={propInputs}></AddressInput>
                    <ModeInput></ModeInput>
                </div>
                <p style={{color:"white"}}>{startAddress}</p>
                <p style={{color:"white"}}>{endAddress}</p>
                <p style={{color:"white"}}>{distance}</p></div>
            <div className="background">
                
            </div>
            <div className="journey-results">
                <Map
                    startAddress={startAddress}
                    endAddress={endAddress}
                    setDistance={setDistance}
                />
                <div className="results-container">
                    { 
                        <Results
                            distance={distance}
                        /> 
                    }
                </div>

            </div>
            
        </div>
    );
}