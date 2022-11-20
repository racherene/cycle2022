import d1 from "../Images/spreadBubble.svg"
import d2 from "../Images/logoBig.svg"
import d3 from "../Images/samsan.svg"
import {Link} from "react-router-dom";

export default function AboutUs() {
    return (
        <div className = "aboutus">
            <div className= "title-wrapper">
                <div className = "titleabout text text-primary">
                    About Us</div>
                <div className = "bigtitle">
                    About Cyclify</div>
                <div className = "subtitle">
                    Learn more about our mission and team</div>
            </div>
            <img className="side-image" src={d1}></img>

            <div className="about-cyclify">
                <div className = "about1-background"></div>
                <img className = "logo-image-big"src={d2}></img>
                <div className = "main-about-title text text-primary">
                    History</div>
                <div className = "main-about-context text">
                    Cyclify is a service that provides users with updated cycling pathways and information about their carbon footprint. 
                    <p>&nbsp;</p> 
                    <p></p> 
                        <span> Created in November of 2022 for the Hack the Change Hackathon, targetting the prompt “how do we promote healthy and sustainable living for general populations”.</span>
                </div>
            </div>

            <div className = "meetTheTeam">
                <div className = "meet-title">
                    Meet The Team
                </div>
                <div className = "tile1"></div>
                    
                <div className = "tile2"></div>
                <div className = "tile3"></div>
                <div className = "tile4"></div>
                <div className = "tile5"></div>


                <div className = "SamSan">
                <div className = "SamSan-background"></div>
                    <div className = "SamSan-title"></div>
                            SamSan Tech
                    <img className = "SamSan-image"src={d3}></img>
                </div>
            </div>
        </div>
    );
}