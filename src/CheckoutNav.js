// SimpleNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CheckoutNavStyle.css'; // Changed CSS file name

const SimpleNav = () => {
  return (
    <nav className="checkout-navbar navbar-expand-lg navbar-light bg-white fixed-top justify-content-center"> {/* Changed class name */}
      <Link to="/" className="simple-logo"> {/* Changed class name */}
        <img src="/kekaLogo.png" alt="logo" className="mx-auto" id='simple-logo' /> {/* Changed id name */}
      </Link>
      {/* Add cart icon or any other elements you need */}
    </nav>
  );
};

export default SimpleNav;
