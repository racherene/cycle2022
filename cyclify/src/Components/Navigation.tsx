import logo from '../Images/logo.svg'
import {Link} from "react-router-dom";

export default function Navigation() {
    return (
        <div className="top-nav">
            <img src={logo} className="logo"/>
                <div className="nav-link-wrapper">
                    <Link to='/' className="nav-text-light">Home</Link>
                    <Link to='/journey' className="nav-text-light">Journey</Link>
                    <Link to='/aboutus' className="nav-text-light">About Us</Link>
                </div>

            <div className="nav-user-wrapper">
                <a href="" className="nav-text-dark">Sign Up</a>
                <a href="" className="btn-filled">Log in</a>
            </div>
        </div>
    );
} 