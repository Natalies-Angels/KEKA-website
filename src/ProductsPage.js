import React, { useState } from 'react';
import './ProductsPageStyle.css';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedQuantity, setSelectedQuantity] = useState('');

    const categoryOptions = ['Category 1', 'Category 2', 'Category 3'];
    const sizeOptions = ['Size 1', 'Size 2', 'Size 3'];
    const quantityOptions = ['1', '2', '3', '4', '5'];

    return (
        <div className='product-content'>
            <div className="product-card-section">
                <div className="product-card">
                    <div className="product-card-image">
                        <img src="/1.png" alt="product" />
                    </div>
                </div>

                <div className="product-card-content">
                    <br />
                    <form>
                        <h2>Edition Name (product name)</h2>
                        <label>
                            Category:
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="" disabled>Select a category</option>
                                {categoryOptions.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </label>
                        <br />
                        <label>
                            Measurements:
                            <select
                                value={selectedSize}
                                onChange={(e) => setSelectedSize(e.target.value)}
                            >
                                <option value="" disabled>Select a size</option>
                                {sizeOptions.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </label>
                        <br />
                        <label>
                            Quantity:
                            <select
                                value={selectedQuantity}
                                onChange={(e) => setSelectedQuantity(e.target.value)}
                            >
                                <option value="" disabled>Select a quantity</option>
                                {quantityOptions.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </label>
                        <br />

                        <button type="button" className="btn btn-primary">Add to Cart</button>
                    </form><br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum vulputate justo quis libero mattis tincidunt.
                        Cras sit amet metus nec nibh congue dapibus. Vivamus ac
                        massa vulputate urna hendrerit mattis vel ut nisl.{' '}
                        <span className='price-link'>
                            <Link to='/edition#jicho'>More about this edition</Link>
                        </span>

                        {' '}Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Integer tempor sem sed molestie dapibus.Phasellus orci odio,
                        dapibus ut leo id, consectetur convallis mauris.
                        massa vulputate urna hendrerit mattis vel ut nisl.
                        Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Integer tempor sem sed molestie dapibus.Phasellus orci odio,
                        dapibus ut leo id, consectetur convallis mauris.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
