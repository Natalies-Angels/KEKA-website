import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavStyle.css';

const Nav = () => {
  const location = useLocation();

  // Define an array of paths where you want to hide the navigation bar
  const hideNavBarPaths = ['/checkout'];

  // Check if the current path is in the hideNavBarPaths array
  const isNavBarVisible = !hideNavBarPaths.includes(location.pathname);

  // Render the navigation bar only if it's visible
  return isNavBarVisible ? (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid">
        <div className="d-flex justify-content-start">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/story">
                our story
              </a>
            </li>
          </ul>
        </div>

        <Link to="/" className="nav-logo">
          <img src="/kekaLogo.png" alt="logo" />
        </Link>

        <div className="d-flex justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                our products
              </a>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <a className="dropdown-item" href="/exploreSeries">
                    series
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/floor-rugs">
                    all products
                  </a>
                </li>
                <li>
                  
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/checkout">
                checkout
              </a>
            </li>

          
          
          </ul>
        </div>
      </div>
    </nav>
  ) : null;
};

export default Nav;
