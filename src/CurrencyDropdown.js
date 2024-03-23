import React, { useState } from 'react';
import './CurrencyDropdownStyle.css';
import { useCurrency } from './CurrencyContext';

const CurrencyDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { updateCurrency } = useCurrency(); // Remove selectedCurrency since it's not being used

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCurrencyChange = (newCurrency) => {
    updateCurrency(newCurrency);
    setShowDropdown(false);
  };

  return (
    <div className="scroll-button-container">
      <button
        className={`scroll-button ${showDropdown ? 'up' : ''}`}
        onClick={toggleDropdown}
      >
        {showDropdown ? '▲' : '⌵'} 
      </button>

      {showDropdown && (
        <div className="dropdown-content">
          <div className="dropdown-item" onClick={() => handleCurrencyChange('USD')}>
            USD
          </div>
          <div className="dropdown-item" onClick={() => handleCurrencyChange('KES')}>
            KES
          </div>
          <div className="dropdown-item" onClick={() => handleCurrencyChange('EUR')}>
            EUR
          </div>
          <div className="dropdown-item" onClick={() => handleCurrencyChange('GBP')}>
            GBP
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
