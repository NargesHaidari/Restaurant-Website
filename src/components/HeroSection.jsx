
import headerImage from '../assets/headerImage.png'
import './HeroSection.css'

export default function HeroSection(){
    return (
        <section className="hero-section">

            <div className="section-texts">
                <h1>Fresh and <span>Delicious</span><br/> Food Delivered Easily</h1>
                <p>
                    Welcome to Sadaf Restaurant, where quality and taste come together. With over fifteen years of experience, we serve a wide variety of premium seafood dishes along with delicious desserts and gourmet sweets. We are committed to providing fast, fresh, and high-quality food delivery right to your doorstep. Choose Sadaf Restaurant for a memorable dining experience.
                </p>
                <a className="btn" href="#order">Order Now</a>
            </div>

            <div className="section-img">
                <img src={headerImage} alt="header-image"/>
            </div>

        </section>
    )
}