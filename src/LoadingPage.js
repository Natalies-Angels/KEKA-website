import React, { useState, useEffect } from 'react';
import './LoadingPageStyle.css'; // Make sure to import your CSS file

const LoadingPage = () => {
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);

  // Array of loading texts
  const loadingTexts = [
    'This is our loading page :)',
    'We\'ll use a much better loading icon...',
    'Not this boring blue ring ',
    'We\'ll style it too ',
    'with love, ',
    'ICT crew <3'
  ];

  useEffect(() => {
    // Switch loading text every 2 seconds
    const textInterval = setInterval(() => {
      setLoadingTextIndex((prevIndex) => (prevIndex + 1) % loadingTexts.length);
    }, 3000);

    // Navigate to CustomizationPage after 15 seconds
    const navigationTimeout = setTimeout(() => {
      window.location.href = '/CustomizationPage'; // Redirect to CustomizationPage
    }, 18000);

    // Clear interval on component unmount
    return () => {
      clearInterval(textInterval);
      clearTimeout(navigationTimeout);
    };
  }, [loadingTexts]); // Include loadingTexts in the dependency array

  return (
    <div className="loader-container">
      <div className="loader"></div>
      <div className="loading-text">{loadingTexts[loadingTextIndex]}</div>
    </div>
  );
};

export default LoadingPage;
