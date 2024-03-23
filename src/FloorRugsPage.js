import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FloorRugsStyle.css';
import CurrencyDropdown from './CurrencyDropdown';
import { useCurrency } from './CurrencyContext';
import CartPage from './Cart';

const FloorRugsPage = () => {
  // State variables
  const { selectedCurrency } = useCurrency(); // ***come back to this***
  
  const [convertedPrices, setConvertedPrices] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch data and calculate converted prices on currency change
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const apiKey = '8f628fd706e14af8a9e05973006fcf03';
        const baseCurrency = 'USD';
        const apiUrl = `https://open.er-api.com/v6/latest/${baseCurrency}?apikey=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        const exchangeRates = data.rates;

        const floorRugsData = [
          { id: 1, name: 'Floor Rug 1', price: '$2572', imageUrl: '/Square Pillow Mockup.png' },
          { id: 2, name: 'Floor Rug 2', price: '$2000', imageUrl: '/1.png' },
          { id: 3, name: 'Floor Rug 1', price: '$2500', imageUrl: '/All 3.png' },
          { id: 4, name: 'Floor Rug 2', price: '$2100', imageUrl: '/2.png' },
          { id: 5, name: 'Floor Rug 1', price: '$2000', imageUrl: '/3.png' },
          { id: 6, name: 'Floor Rug 2', price: '$2500', imageUrl: '/All 3.png' },
          { id: 7, name: 'Floor Rug 1', price: '$2000', imageUrl: '/1.png' },
          { id: 8, name: 'Floor Rug 2', price: '$2500', imageUrl: '/Square Pillow Mockup.png' },
        ];

        // Calculate converted prices based on the selected currency
        const convertedPricesData = floorRugsData.map(product => ({
          id: product.id,
          name: product.name,
          price: calculateConvertedPrice(parseFloat(product.price.slice(1)), exchangeRates[selectedCurrency]),
          imageUrl: product.imageUrl,
        }));

        setConvertedPrices(convertedPricesData);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices();
  }, [selectedCurrency]);

  // Function to calculate converted price
  const calculateConvertedPrice = (originalPrice, exchangeRate) => {
    const convertedPrice = originalPrice * exchangeRate;
    return convertedPrice.toFixed(2);
  };

  // Function to handle quick shop button click
  const handleQuickShop = (product) => {
    setSelectedProduct(product);
    setIsCartOpen(true);
  };

  // Function to handle closing the cart
  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className='floor-rugs-content'>
      {/* Currency dropdown component */}
      <CurrencyDropdown />

      {/* Floor rugs container */}
      <div className="floor-rugs-container">
        {/* Render each floor rug */}
        {convertedPrices.map(product => (
          <Link to="/product" key={product.id} className="floor-rug-card">
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.name}</p>
            <h4>{`${product.price} ${selectedCurrency}`}</h4>
            {/* Overlay for quick shop */}
            <div className="overlay" onClick={() => handleQuickShop(product)}>
              <p>QUICK SHOP</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Render the CartPage component conditionally */}
      {isCartOpen && <CartPage onClose={handleCloseCart} selectedProduct={selectedProduct} />}
    </div>
  );
};

export default FloorRugsPage;
