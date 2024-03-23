import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './landingPageStyle.css';

const LandingPage = () => {
    const [showButton, setShowButton] = useState(false);
    const [showText, setShowText] = useState([false, false, false, false]);

    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll(".card");

            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();

                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    if (!showText[index]) {
                        setShowText(prevState => {
                            const newState = [...prevState];
                            newState[index] = true;
                            return newState;
                        });
                    }
                } else {
                    if (showText[index]) {
                        setShowText(prevState => {
                            const newState = [...prevState];
                            newState[index] = false;
                            return newState;
                        });
                    }
                }
            });

            // Check if the cards section is in view
            const cardsSection = document.getElementById("category-section");

            if (cardsSection) {
                const rect = cardsSection.getBoundingClientRect();

                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    setShowButton(true);
                } else {
                    setShowButton(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [showText]);

    return (
        <div className="landing-page-body">
            <div className="landingpage-cta-container">
                <div className="full-screen-content text-center">
                    <h2>Image/Video goes here</h2>
                    <p>Discover luxury & individuality at KEKA. Create your perfect rug with our unique customization process. 
                       Watch our video & start crafting your masterpiece today.
                    </p>
                    <button type="button" className="btn btn-primary btn-lg">build your KEKA</button>
                </div>
            </div>

            <div className="landing-page-copy">
                <h4>Welcome to KEKA: Where Luxury Meets Customization</h4>
                <p>
                    At KEKA, we believe that every space deserves a touch of luxury and individuality. That's why we offer a unique design customization process that allows you to create a rug that perfectly reflects your style and vision.
                    Your Unique Masterpiece Awaits: Discover the joy of owning a truly unique masterpiece with KEKA. Watch our video below to learn more about our design customization process and start creating the rug of your dreams today.
                </p>
            </div>

            <div className="category-container" id="category-section">

                <Link to="/floor-rugs" className="card">
                    <img src="/TLXArtboard 1 copy 25000 x 3500.jpg" alt="Floor Rugs" />
                    <div className={`overlay ${showText[0] ? 'visible' : ''}`}>
                        <h3>Floor Rugs</h3>
                        {showButton && <button type="button" className="btn btn-primary">explore our products</button>}
                    </div>
                </Link>

                <Link to="/buildYourKEKA" className="card">
                    <img src="/wallHangings.jpg" alt="Wall Hangings" />
                    <div className={`overlay ${showText[1] ? 'visible' : ''}`}>
                        <h3>Wall Hangings</h3>
                        {showButton && <button type="button" className="btn btn-primary">build your KEKA</button>}
                    </div>
                </Link>

                <Link to="/exploreseries" className="card">
                    <img src="/TLXArtboard 1 copy5000 x 3500.jpg" alt="Cushions" />
                    <div className={`overlay ${showText[2] ? 'visible' : ''}`}>
                        <h3>Cushions</h3>
                        {showButton && <button type="button" className="btn btn-primary">explore series</button>}
                    </div>
                </Link>

                <Link to="/cushions" className="card">
                    <img src="/wallHangings.jpg" alt="Cushions" />
                    <div className={`overlay ${showText[3] ? 'visible' : ''}`}>
                        <h3>Cushions</h3>
                        {showButton && <button type="button" className="btn btn-primary">discover our sustainability</button>}
                    </div>
                </Link>
            </div>

            <div className="landingpage-additional-card-section">
                <div className="landingpage-additional-card-image">
                    <img src="/All 3.png" alt="Additional Image" />
                </div>
    
                <div className="landingpage-additional-card-content">
                    <h2>The Do Good Series</h2>
                    <p>In the enchanting realm of KEKA's tufted tapestries, the 'Do Good' series unfolds as a captivating trilogy, comprising three editions: 'Jicho,' 'Domo,' and 'Skio.' Each edition converges to weave an interconnected tale.</p>
                <button type="button" className="btn btn-primary">Learn More</button>
            </div>           
</div>
          
        </div>
    );
}

export default LandingPage;
