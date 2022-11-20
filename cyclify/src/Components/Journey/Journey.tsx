import React from "react";
import Map from "../../API/Map/Map";
import AddressInput from "./AddressInput";
import ModeInput from "./ModeInput";
import Result from "./Results"; 

export default function Journey() {
    return (
        <div className="journey">
            <div className="background">
                <h2>Create your journey!</h2>
                <div className="input-split">
                    <AddressInput></AddressInput>
                    <div className="results-label text text-secondary-dark"> Your Results</div>
                    <Map></Map>
                    <ModeInput></ModeInput>
                    <Result></Result>
                </div>
            </div>
            
        </div>
    );
}