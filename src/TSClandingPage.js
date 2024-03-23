// TSClandingPage.jsx

import React, { useState, useRef } from 'react';
import './TSClandingPageStyle.css';
import { Link } from 'react-router-dom';

const TSClandingPage = () => {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setScrollPosition(scrollPosition - container.offsetWidth);
      container.scrollTo({
        left: scrollPosition - container.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setScrollPosition(scrollPosition + container.offsetWidth);
      container.scrollTo({
        left: scrollPosition + container.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='TSC-body'>
     <div className='logo'>
        <img src="/Asset 1Turubai Logo.png" alt="" />
       </div>
    <div className='hero-section'>
      

      <div className="card-container">
    <div className="card small-card">
      <img className="card-img-top" src="..." alt="avatar 1" />
    </div>
    <div className="card small-card">
      <img className="card-img-top" src="..." alt="avatar 2" />
    </div>
    <div className="card small-card">
      <img className="card-img-top" src="..." alt="avatar 3" />
    </div>
    <div className="card small-card">
      <img className="card-img-top" src="..." alt="avatar 4" />
    </div>
    <div className="card small-card">
      <img className="card-img-top" src="..." alt="avatar 5" />
    </div>
    <div className="card small-card">
      <img className="card-img-top" src="..." alt="Card image cap" />
    </div>
    {/* Repeat this structure for other small cards */}
  </div>
</div>


      <div className='TSC-about'>
        <p>
          Ut blandit mi quis libero condimentum, quis pulvinar nulla dictum. In consectetur ipsum quis vehicula dapibus. Interdum et 
          malesuada fames ac ante ipsum primis in faucibus. Nulla vel consectetur elit, a luctus enim. Vestibulum vel interdum eros. 
          Morbi consectetur, mi non elementum suscipit, nisl nisi fringilla sem, et pharetra nibh mauris sit amet nisi. Phasellus in arcu 
          nec velit lobortis tempus at et enim. Aenean dignissim at odio eu interdum.
          Ut blandit mi quis libero condimentum, quis pulvinar nulla dictum. In consectetur ipsum quis vehicula dapibus. Interdum et 
          malesuada fames ac ante ipsum primis in faucibus. Nulla vel consectetur elit, a luctus enim. Vestibulum vel interdum eros. 
          Morbi consectetur, mi non elementum suscipit, nisl nisi fringilla sem, et pharetra nibh mauris sit amet nisi. Phasellus in arcu 
          nec velit lobortis tempus at et enim. Aenean dignissim at odio eu interdum.
          Ut blandit mi quis libero condimentum, quis pulvinar nulla dictum. In consectetur ipsum quis vehicula dapibus. Interdum et 
          malesuada fames ac ante ipsum primis in faucibus. Nulla vel consectetur elit, a luctus enim. Vestibulum vel interdum eros. 
          Morbi consectetur, mi non elementum suscipit, nisl nisi fringilla sem, et pharetra nibh mauris sit amet nisi. Phasellus in arcu 
          nec velit lobortis tempus at et enim. Aenean dignissim at odio eu interdum.
        </p>
        {/* Repeat your content for TSC-about section as needed */}
      </div>

      <div className='roles'>
        <div className="card-container roles-cards">
          <div className="card">
            {/* Your existing card structure for roles */}
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
            </div>
          </div>
          <div className="card">
            {/* Your existing card structure for roles */}
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             
            </div>
          </div>
          <div className="card">
            {/* Your existing card structure for roles */}
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
            </div>
          </div>
          <div className="card">
            {/* Your existing card structure for roles */}
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
            </div>
          </div>
          <div className="card">
            {/* Your existing card structure for roles */}
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
            </div>
          </div>
          <div className="card">
            {/* Your existing card structure for roles */}
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
            </div>
          </div>

          {/* Repeat the structure for other cards in the roles section without the small-card class */}
        </div>
      </div>

      {/* ... Other sections ... */}

    </div>
  );
};

export default TSClandingPage
