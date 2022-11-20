import DonutChart from 'react-donut-chart';
import {useState} from 'react';
import carbonAPI, { IEmissionsResponse } from '../../API/CarbonAPI';
import { useEffect } from 'react';

export default function Results({ distance }: { distance: number | undefined }) {

    const [eta, setEta] = useState(0);
    const [drivingE, setDrivingE] = useState(0);
    const [transE, setTransE] = useState(0);
    const [globalE, setGlobalE] = useState(40);

    useEffect(() => {
        async function fetchData() {
            console.log(distance);

            try {
                const transit = await carbonAPI.getBusEmissions(distance as number, "km");
                const car = await carbonAPI.getCarEmissions(distance as number, "km");

                setTransE(Math.round(transit.co2e));
                setDrivingE(Math.round(car.co2e));
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [distance]);
    
    //might gotta do some calc for eta

    return ( 
        
        <div className ="result-container">
           <div className= "eta-box">
                ETA : {eta}

            </div>

            <div className ="emission-info-container">
                <div className="carbon-emission-title">
                    Carbon Emissions
                </div>

                <div className ="driving-emission">
                        Driving : {drivingE} KG
                </div>

                <div className = "public-emission">
                      Transit : {transE} KG
                </div>
            </div>
            <div className='donut-chart'>
            <DonutChart
                colors={["#366B68"]}
                data={[
                    {
                        label: 'Global Emission',
                        value: globalE,
                    },
                    {
                        label: '',
                        value: 100-globalE,
                        isEmpty: true,
                    },
                ]}
            />
            </div>
        </div>
        );
}