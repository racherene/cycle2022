import {useState} from 'react';
import {BsArrowRight} from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';

// "Props" will be propogated to parent component (Journey.tsx in this case)
type Props = {
    propStartAddress: (newType: string) => void;
    propEndAddress: (newType: string) => void;
    propDistance: (newType: number) => void;
};

export default function AddressInput({ propStartAddress, propEndAddress, propDistance }: Props) {
    // Define state variables
    const [startAddress, setStartAddress] = useState<undefined | string>('');
    const [endAddress, setEndAddress] = useState<undefined | string>('');
    const [distance, setDistance] = useState<undefined | number>();

    // Define handlers for when state changes
    function handleStartAddressChange(event: any) {
        setStartAddress(event.target.value);
        propStartAddress(event.target.value);
    }
    function handleEndAddressChange(event: any) {
        setEndAddress(event.target.value);
        propEndAddress(event.target.value);
    }
    function handleDistanceChange(event: any) {
        setDistance(event.target.value);
        propDistance(event.target.value);
    }

    return (
        <div>
            
        <div className="address-input">
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
            
        </div>
        </div>
    );
};