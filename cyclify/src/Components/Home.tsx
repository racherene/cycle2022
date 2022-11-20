import React from "react";
import {Link} from 'react-router-dom';
import image from "../Resources/download.png";

function Home() {
    return(
        <div>
            Home
            <Link to='/about'>Go to about</Link>
            <img src={image} alt="Placeholder"></img>
        </div>
    )
}

export default Home;