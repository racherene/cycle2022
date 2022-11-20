import homeImage from "../Images/HomeImage.svg"

export default function Home() {
    return (
        <div className="image-wrapper">
            <img className="homeImage" src={homeImage}></img>
            <div className="overlay"></div>
            
        </div>
    );
}