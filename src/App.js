// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CurrencyProvider } from './CurrencyContext';
import Nav from './Nav';
import CurrencyDropdown from './CurrencyDropdown';
import Footer from './Footer';
import CheckoutNav from './CheckoutNav'; // Import CheckoutNav
import Checkout from './Checkout';
import LandingPage from './LandingPage';
import WallHangingsPage from './WallHangingsPage';
import FloorRugsPage from './FloorRugsPage';
import CushionsPage from './CushionsPage';
import Story from './Story';
import TSClandingPage from './TSClandingPage';
import FAQ from './FAQ';
import ProductsPage from './ProductsPage';
import EditionPage from './EditionPage';
import WhoWeAre from './WhoWeAre';
import CustomizationPage from './CustomizationPage';
import LoadingPage from './LoadingPage';
import ExploreSeries from './ExploreSeries';

const App = () => {
    return (
        <CurrencyProvider>
            <Router>
                {/* Render the default nav and currency dropdown */}
                <Nav />
                <CurrencyDropdown />
                {/* Define the routes */}
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/wall-hangings" element={<WallHangingsPage />} />
                    <Route path="/floor-rugs" element={<FloorRugsPage />} />
                    <Route path="/cushions" element={<CushionsPage />} />
                    {/* Use CheckoutNav component only for the checkout route */}
                    <Route path="/checkout/*" element={<Checkout />}>
                        <Route index element={<CheckoutNav />} />
                    </Route>
                    <Route path="/story" element={<Story />} />
                    <Route path="/buildYourKEKA" element={<LoadingPage />} />
                    <Route path="/CustomizationPage" element={<CustomizationPage />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/product" element={<ProductsPage />} />
                    <Route path="/edition" element={<EditionPage />} />
                    <Route path="/WhoWeAre" element={<WhoWeAre />} />
                    <Route path="/exploreSeries" element ={<ExploreSeries/>} />
                </Routes>
                {/* Render the footer */}
                <Footer />
            </Router>
        </CurrencyProvider>
    );
};

export default App;
