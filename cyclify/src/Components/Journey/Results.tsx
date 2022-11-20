import DonutChart from 'react-donut-chart';
import {useState} from 'react';
export default function Results(){


    const [eta, setEta] = useState(0);
    const [drivingE, setDrivingE] = useState(0);
    const [transE, setTransE] = useState(0);
    const [globalE, setGlobalE] = useState(40);
    
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
            label: 'Percent of daily emission reduced',
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