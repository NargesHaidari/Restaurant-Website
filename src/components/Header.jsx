
import './Header.css'
import foodLogo from '../assets/foodLogo.png'
import HeroSection from './HeroSection'

export default function Header(){
    return (
        <header id="home">

            <nav className="header-navigation">
                <div className="nav-img">
                    <img src={foodLogo} alt="logo-image"/>
                </div>
                <ul className="nav-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#menu">Food Menu</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#discriptions">Customer Reviews</a></li>
                    <li><a href="#order">Online Order</a></li>
                </ul>
                <div className="nav-icons">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <i className="fa-sharp fa-solid fa-heart"></i>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="menu-icon fa-solid fa-bars" id="menu-icon"></i>
                </div>
            </nav>

            <HeroSection/>
            
        </header>
    )
}