import React, { useState } from 'react';
import './CustomizationPageStyle.css';

const CustomizationPage = () => {
  const [showModal, setShowModal] = useState(true);

  const handleLoadCustomization = () => {
    // Logic to load customization content
    setShowModal(false); // Close the modal
    // Additional logic to load the customization content
  };

  return (
    <div className="customization-page">
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>build your KEKA</h2>
            <p>Click the button below to load the customization content.</p>
            <button onClick={handleLoadCustomization}>Begin</button>
          </div>
        </div>
      )}

      {/* Your customization content goes here */}
      {/* This content will be displayed after clicking the "Load Customization" button */}
      <div className="customization-content">
        {/* Your customization components */}
      </div>
    </div>
  );
};

export default CustomizationPage;
