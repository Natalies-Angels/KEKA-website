// Checkout.js
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './CheckoutStyle.css';
import SimpleNav from './CheckoutNav';

const Checkout = () => {
    return (
        <div className="container">
            <div className="row">
                <SimpleNav />
                <div className="col-md-8">
                    <hr className='top'/>
                    <h3>Checkout</h3>

                    {/* Personal Information */}
                    <div>
                        <h4><span className="section-number">1</span>Personal Information</h4>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="john.doe@example.com" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" id="phone" placeholder="+12345678906" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="John" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="secondName" className="form-label">Second Name</label>
                                    <input type="text" className="form-control" id="secondName" placeholder="Doe" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="countryRegion" className="form-label">Country/Region</label>
                                    <input type="text" className="form-control" id="countryRegion" placeholder="Country" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="123 Main Street, Cityville, Country" />
                                </div>
                            </div>
                        </div>
                    </div>

                   

                    {/* Delivery Details */}
                    <div>
                        <h4><span className="section-number">2</span>Delivery Details</h4>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="shippingAddress" className="form-label">Shipping Address</label>
                                <input type="text" className="form-control" id="shippingAddress" placeholder="123 Main Street, Cityville, Country" />
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-9">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text" className="form-control" id="city" placeholder="Cityville" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="postalCode" className="form-label">Postal Code</label>
                                    <input type="text" className="form-control" id="postalCode" placeholder="12345" />
                                </div>
                            </div>

                            <div className="row mb-3">
                            <div className="col-md-9">
                                    <label htmlFor="streetName" className="form-label">Street Name</label>
                                    <input type="text" className="form-control" id="streetName" placeholder="Main Street" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="streetNumber" className="form-label">Street Number</label>
                                    <input type="text" className="form-control" id="streetNumber" placeholder="123" />
                                </div>
                                
                            </div>

                    <div className="row mb-3">
                        <div className="col-md-4">
                            <label htmlFor="floor" className="form-label">Floor</label>
                            <input type="text" className="form-control" id="floor" placeholder="3rd" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="houseNumber" className="form-label">House Number</label>
                            <input type="text" className="form-control" id="houseNumber" placeholder="42" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="etc" className="form-label">Etc</label>
                            <input type="text" className="form-control" id="etc" placeholder="Additional info" />
                        </div>
                    </div>
                    <div className="mb-3">
                            <label htmlFor="specialInstructions" className="form-label">Special Instructions</label>
                            <textarea type="text" className="form-control" id="specialInstructions" placeholder="Leave package at doorstep if no one is available"></textarea>
                    </div>
                </div>
                    </div>
                   
                    <div>
                        <h4><span className="section-number">3</span>Payment Details</h4>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <p>All transactions are secure and encrypted</p>
                        </div>
                    </div>
            </div>

                {/* Order Summary */}
                <div className="col-md-4">
                    <div className="bordered-div">
                        <h4>Order Review</h4>
                        <br/>
                        <br/>
                        <br/>
                        <hr  />
                        
                        <h4>Referral Code</h4>
                        <br/>
                        <br/>
                        <br/>
                        <hr  />
                        <h4>Order Summary</h4>
                        <br/>
                        <br/>
                        <br/>
                        <hr  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
