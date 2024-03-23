// CartPage.js

import React from 'react';
import './Cart.css';

const CartPage = ({ onClose, selectedProduct }) => {
  return (
    <div className="cart-modal">
      <div className="cart-content">
        <div className='modal-title'><h2>{selectedProduct.name} </h2></div>
          {selectedProduct && (
          <div className="product-details-container">
            <div className="product-image">
              <img src={selectedProduct.imageUrl} alt={selectedProduct.name} />
            </div>
            <div className="product-details">
              <p>Name: {selectedProduct.name}</p>
              <p>Price: ${selectedProduct.selectedCurrency}{selectedProduct.price}</p>
              <button className='btn'>Add to Cart</button>
              <button onClick={onClose} className='btn'>Continue Shopping</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
