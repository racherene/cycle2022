import {useState} from 'react';
<<<<<<< HEAD
import {BsArrowRight} from "react-icons/bs";
=======
import RightPoint from "../../Images/RightPoint.png";
>>>>>>> d4d2c17f6e8daba6524e0517b7d53260b37e92ae

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
        <div className="address-input">
            <input
                type="text"
                id="start-address-input"
                onChange={handleStartAddressChange}
            />
<<<<<<< HEAD
            <BsArrowRight />?
            {/* <img src={BsArrowRight} id="address-arrow" alt="Right Pointing Finger"></img> */}
=======
            <img src={RightPoint} id="address-arrow" alt="Right Pointing Finger"></img>
>>>>>>> d4d2c17f6e8daba6524e0517b7d53260b37e92ae
            <input
                type="text"
                id="end-address-input"
                onChange={handleEndAddressChange}
            />
            <span id="address-seperator">Or</span>
            <input
                type="number"
                id="distance-input"
                onChange={handleDistanceChange}
            />
        </div>
    );
};