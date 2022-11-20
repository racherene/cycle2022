import React, { useState } from "react";
import DropDown from "./Dropdown";

const Menu: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectVehicle, setSelectVehicle] = useState<string>("");
  const vehicles = () => {
    return ["Car", "Transit"];
  };

  /**
   * Toggle the drop down menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the
   * Vehicle name from the child component
   *
   * @param Vehicle  The selected Vehicle
   */
  const vehicleSelection = (Vehicle: string): void => {
    setSelectVehicle(Vehicle);
  };

  return (
    <>
      <div className="announcement">
        <div>
          {selectVehicle
            ? `You selected ${selectVehicle} for your travel destination`
            : "Select your travel destination"}
        </div>
      </div>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectVehicle ? "Select: " + selectVehicle : "Select ..."} </div>
        {showDropDown && (
          <DropDown
            vehicles={vehicles()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            vehicleSelection={vehicleSelection}
          />
        )}
      </button>
    </>
  );
};

export default Menu;
