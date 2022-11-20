import {useState} from 'react';
import {BsArrowRight} from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';

// "Props" will be propogated to parent component (Journey.tsx in this case)
type Props = {
    propInputs: (event: any, start: string, end: string, dist: number) => void;
};

export default function AddressInput({ propInputs }: Props) {
    // Define state variables
    const [startAddress, setStartAddress] = useState<undefined | string>('');
    const [endAddress, setEndAddress] = useState<undefined | string>('');
    const [distance, setDistance] = useState<undefined | number>();

    // Define handlers for when state changes
    function handleStartAddressChange(event: any) {
        setStartAddress(event.target.value);
    }
    function handleEndAddressChange(event: any) {
        setEndAddress(event.target.value);
    }
    function handleDistanceChange(event: any) {
        setDistance(event.target.value);
    }

    return (
        <div>
            
        <div className="address-input">
            <form onSubmit={e => propInputs(
                e, 
                startAddress as string, 
                endAddress as string, 
                distance as number
            )}>
                <div className='center'>
                    <input
                    type="text"
                    id="start-address-input"
                    className="standard-input"
                    placeholder='Location from:'
                    onChange={handleStartAddressChange}
                    />
                    <BsArrowRight style={{fontSize: "50px", margin: "0px 20px"}}/>
                    {/* <img src={BsArrowRight} id="address-arrow" alt="Right Pointing Finger"></img> */}
                    <input
                        type="text"
                        id="end-address-input"
                        className="standard-input"
                        placeholder='Location to:'
                        onChange={handleEndAddressChange}
                    />
                </div>
                <div  className='center text text-secondary-dark header'  id="address-seperator">Or</div>
                <div className='center'>
                    <input
                        type="number"
                        id="distance-input"
                        className="standard-input"
                        placeholder='Total Distance (KM):'
                        onChange={handleDistanceChange}
                    />
                </div>
                <button type="submit" id="determine-results-button">Determine My Results</button>
            </form>
            
        </div>
        </div>
    );
};