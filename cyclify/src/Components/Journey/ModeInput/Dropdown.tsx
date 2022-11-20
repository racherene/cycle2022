import React, { useEffect, useState } from 'react';

type DropDownProps = {
    vehicles: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  vehicleSelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
    vehicles,
  vehicleSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * Handle passing the vehicle type
   * back to the parent component
   *
   * @param vehicle  The selected city
   */
  const onClickHandler = (vehicle: string): void => {
    vehicleSelection(vehicle);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {vehicles.map(
          (vehicle: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(vehicle);
                }}
              >
                {vehicle}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default DropDown;
