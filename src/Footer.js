// Footer.js

import React from "react";
import './FooterStyle.css'; // Correct file path for styling

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-links">
                <a href="#">CONTACT</a>
                <a href="#">RUG CARE</a>
                <a href="#">FAQ</a>
                <a href="#">STOCKISTS</a>
            </div>
            <p className="copyright">copyright ©2024, turubai studios & collective</p>
            {/* <div className="footer-form">
                <h3>Don't Be a Stranger</h3>
                <p>Subscribe to our mailing list for the latest news and updates.</p>
                <form>
                    <label htmlFor="firstname">first name</label>
                    <input type="text" id="firstname" name="firstname" placeholder="Your first name" />

                    <label htmlFor="lastname">last name</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Your last name" />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email address" />
                    
                    <button type="submit">Subscribe</button>
                </form>
            </div> */}
        </footer>
    );
}

export default Footer;
