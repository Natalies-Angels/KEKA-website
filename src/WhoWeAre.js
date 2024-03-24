// WhoWeAre.jsx

import React from 'react';
import './WhoWeAreStyle.css';

const WhoWeAre = () => {
  return (
    <div className='who-we-are-body'>
      <div className='intro'><br/>
      <h3 >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate justo quis libero mattis tincidunt.
          Cras sit amet metus nec nibh congue dapibus.
      </h3>
      </div>
      <div className="who-we-are-container">
      
      <section className="section">
        <h2>Giving Back</h2><br/>
        <p>
        A portion of the price is dedicated to our giving back initiative, where we donate a percentage of each sale to charitable organizations or causes. What makes this initiative unique is that the client has the freedom to choose the charity they want to support. Whether it's environmental conservation, education, healthcare, or any other cause close to their heart, the client's choice drives our donations, allowing them to make a meaningful impact through their purchase.
        </p>
      </section>

      <section className="section">
        <h2> Sustainability</h2><br/>
        <p>
        A portion of the price goes towards sourcing sustainable materials, such as organic wool and ethically sourced cotton, from local farms. Our commitment to sustainability includes eco-friendly production processes and reducing our environmental footprint.
        </p>
      </section>

      <section className="section">
        <h2> Managed by a Creatives' Collective</h2><br/>
        <p>
        KEKA is managed by a creatives' collective, which comprises talented designers, artisans, and experts in the field of rug making. The price reflects the expertise and creative input of our collective, ensuring that every rug is a work of art.
        </p>
      </section>

      <section className="section">
        <h2>Patron Appreciation </h2><br/>
        <p>
        As a token of patron appreciation for choosing KEKA, part of the price is allocated towards patron rewards. What sets this apart is that the patron gets to personalize their reward based on their preferences. They may choose from a range of options such as special discounts on future purchases, exclusive offers, customized accessories for their rug, or other incentives that enhance their overall experience with KEKA. This personalized approach ensures that each patron feels valued and receives a reward that aligns with their needs and preferences.
        </p>
      </section>
    </div>
    </div>
  );
};

export default WhoWeAre;
