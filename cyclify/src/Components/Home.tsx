import homeImage from "../Images/HomeImage.svg"
import d1 from "../Images/bubbleDecoration.svg"
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div style={{ width: "100%", height: "1130px"}}>
            <img className="decoration-1" src={d1}></img>
            <img className="decoration-2" src={d1}></img>
            <div className="image-wrapper">
                <img className="homeImage" src={homeImage}></img>
                <div className="overlay"></div>
                <div className="slogan">
                    Make the change today. 
                    <span>Elevate your journey with Cylify.</span>
                </div>
                <Link to='/aboutus' className = "learn-more text text-secondary-dark">
                    Learn More
                    </Link>
            </div>
            <div className="body">
                <div className="box1 main-desc text text-primary">
                    Reduce your carbon footprint and find out your impact!
                </div>
                <div className="main-user-try text text-secondary" style={{}}>
                    It’s simple! Try it our yourself!                
                </div>
                <Link to='/journey' className="border-button">Create a new route</Link>
            </div>
        </div>
    );
}