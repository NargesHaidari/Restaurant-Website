
import './Footer.css'

export default function Footer(){
    return (
        <footer className="footer">
            <div className="container">

                <div className="section">
                    <h3>Locations</h3>
                    <ul>
                        <li>Los Angeles</li>
                        <li>San Francisco</li>
                        <li>Silicon Valley</li>
                        <li>California</li>
                        <li>Sacramento</li>
                    </ul>
                </div>

                <div className="section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#discriptions">Reviews</a></li>
                        <li><a href="#order">Order</a></li>
                    </ul>
                </div>

                <div className="section">
                    <h3>Contact</h3>
                    <ul>
                        <li>03101186716</li>
                        <li>03285964728</li>
                        <li>baratali@gmail.com</li>
                        <li>narges@gmail.com</li>
                    </ul>
                </div>

                <div className="third-section section">
                    <h3>Services</h3>
                    <ul>
                        <li>Fast Delivery</li>
                        <li>Easy Payment</li>
                        <li>24/7 Support</li>
                    </ul>
                </div>

                <div className="last-footer-section section">
                    <h3>Follow Us</h3>
                    <ul>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-tiktok"></i>
                    </ul>
                </div>

                <div className="text-end">Designed by <span><i className="fa-solid fa-circle-user"></i> WordPress Support</span></div>

                <div className="social-footer-end">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-x-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-tiktok"></i>
                </div>

            </div>
        </footer>
    )
}