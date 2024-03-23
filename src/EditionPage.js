import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EditionPageStyle.css'; // Import the CSS file for styling

const EditionPage = () => {
  useEffect(() => {
    const handleSmoothScroll = () => {
      const jichoSection = document.getElementById('jicho');
      if (jichoSection) {
        jichoSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    handleSmoothScroll();
  }, []);

  return (
    <div>
      <div className="edition-cta-container">
        <div className="cta-overlay">
          <h2 className="edition-name">SERIES NAME</h2>
        </div>
        <img src="/TLXArtboard 1 copy 25000 x 3500.jpg" alt="Additional Image" />
      </div>
      <div className="edition-card-section" id="jicho">
        <div className="edition-card">
          <div className="edition-card-image">
            <img src="/1.png" alt="Edition Jicho" />
          </div>
          <div className="edition-card-content">
            <h2>Jicho</h2>
            <br />
            <p>
              Bearing the Swahili proverb, "Macho hayana pazia," translating to "Eyes have no curtain," 'Jicho' invites you to witness the serenity of a sunset. With seven sets, each comprising three pieces, this edition encapsulates the beauty of dusk in the eye's delicate tufting. These carpets embody the hushed whispers of nature, urging you to see the world not just with your eyes but with your soul{' '}
              <span className="edition-price-link">
                <Link to="/faq">Why our prices?</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="edition-card-section" id="domo">
        <div className="edition-card">
          <div className="edition-card-content">
            <h2>Domo</h2>
            <br />
            <p>
              Grounded in the wisdom of "Ukiona vyaelea, vimeundwa," meaning "If you see things floating, they are crafted," 'Domo' unveils a profound expression of interconnectedness. Each of the seven sets, with three pieces each, transforms the mouth into a metaphorical vessel rooted deep into the earth. As tufting intricacies unfold, the earth within the mouth echoes a narrative of responsibility and stewardship. 'Domo' speaks volumes about the symbiotic relationship we share with our planet, urging us to speak words of compassion and cultivate actions that nourish the roots of our existence
            </p>
          </div>
          <div className="edition-card-image">
            <img src="/Square Pillow Mockup.png" alt="Edition Domo" />
          </div>
        </div>
      </div>
      <div className="edition-card-section" id="skio">
        <div className="edition-card">
          <div className="edition-card-image">
            <img src="/All 3.png" alt="Edition Skio" />
          </div>
          <div className="edition-card-content">
            <h2>Skio</h2>
            <br />
            <p>
              Inspired by the Swahili proverb, "Maneno matamu humtoa nyoka pangoni," translating to "Sweet words bring the snake out of its hole," 'Skio' completes the trilogy. This edition introduces a serpent intertwined with the ear, conveying the power of sweet words and the importance of thoughtful communication. 'Skio' prompts reflection on the impact of our words and the need for words that inspire rather than harm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditionPage;
