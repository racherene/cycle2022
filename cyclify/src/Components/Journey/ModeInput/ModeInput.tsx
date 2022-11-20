import { useState } from "react";
import Menu from "./Menu";


export default function ModeInput() {
    const getInitialState = () => {
        const value = "Car";
        return value;
      };
    
      const [value, setValue] = useState(getInitialState);
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      };
    
    return (
        <div className="emisson-card">
            <label className="emissions-header text text-secondary-dark">
              Compare your journey to:
            </label>
            <Menu></Menu>
        </div> 
    );
}