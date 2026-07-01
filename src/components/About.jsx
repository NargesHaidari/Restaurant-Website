
import aboutImage from '../assets/aboutImage.png'
import './About.css'

export default function About(){
    return (
        <div className="about" id="about"> 

            {/* <div className="about-img">
                <img src={aboutImage} alt="food-image"/>
            </div> */}

            <div className="about-texts">
                <h2 className="h2"><span>About</span> Us</h2>
                <h3>Why Choose Us?</h3>
                <p>
                    Sadaf Restaurant blends traditional Afghan cuisine with modern culinary techniques to create an unforgettable dining experience. We believe that great food has the power to create lasting memories. Our key features include:
                    <br/>- A wide variety of Afghan and international dishes
                    <br/>- Fresh, organic, and high-quality ingredients
                    <br/>- Fast and reliable home delivery service
                    <br/>- A calm and welcoming atmosphere for your special occasions
                </p>
            </div>

            <div className="about-img">
                <img src={aboutImage} alt="food-image"/>
            </div>

        </div>
    )
}