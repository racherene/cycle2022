import React from "react";
import Map from "../../API/Map/Map";
import AddressInput from "./AddressInput";
import ModeInput from "./ModeInput";

export default function Home() {
    return (
        <div className="journey">
            <div className="background">
                <h2>Create your journey!</h2>
                <div className="input-split">
                    <AddressInput></AddressInput>
                    <Map></Map>
                    <ModeInput></ModeInput>
                </div>
            </div>
            
        </div>
    );
}