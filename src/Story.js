import React from 'react';
import { Link } from 'react-router-dom';
import './StoryStyle.css';

const Story = () => {
    return (
        <div>
            <div className="story-cta-container">
                <h2>OUR STORY</h2>
            </div>
            <div className="story-card-section">
                <div className="story-card">
                    <div className="story-card-image">
                        <img src="/1.png" alt="Story Image1" />
                    </div>
                </div>
                <div className="story-card-content">
                    <h2>Lorem Ipsum</h2>
                    <br></br>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum vulputate justo quis libero mattis tincidunt.
                        Cras sit amet metus nec nibh congue dapibus. Vivamus ac
                        massa vulputate urna hendrerit mattis vel ut nisl.
                        Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Integer tempor sem sed molestie dapibus.Phasellus orci odio,
                        dapibus ut leo id, consectetur convallis mauris.
                        massa vulputate urna hendrerit mattis vel ut nisl.
                        Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Integer tempor sem sed molestie dapibus.Phasellus orci odio,
                        dapibus ut leo id, consectetur convallis mauris.
                    </p>
                </div>
            </div>
            <div className="story-card-section">
                <div className="story-card-content">
                    <h2>Lorem Ipsum</h2>
                    <br></br>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum vulputate justo quis libero mattis tincidunt.
                        Cras sit amet metus nec nibh congue dapibus. Vivamus ac
                        massa vulputate urna hendrerit mattis vel ut nisl.{' '}
                        <span className='story-price-link'><Link to='/faq'>Why our prices?</Link></span>

                        Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Integer tempor sem sed molestie dapibus.Phasellus orci odio,
                        dapibus ut leo id, consectetur convallis mauris.
                        massa vulputate urna hendrerit mattis vel ut nisl.
                        Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Integer tempor sem sed molestie dapibus.Phasellus orci odio,
                        dapibus ut leo id, consectetur convallis mauris.
                    </p>
                </div>
                <div className="story-card">
                    <div className="story-card-image">
                        <img src="/Square Pillow Mockup.png" alt="Story Image2" />
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="story-card-section">
                <div className="story-card">
                    <div className="story-card-image">
                        <img src="/All 3.png" alt="Story Image3" />
                    </div>
                </div>
                <div className="story-card-content">
                    <h2>Meet the Team</h2>
                    <br></br>
                    <p>
                        Massa vulputate urna hendrerit mattis vel ut nisl.
                        Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Integer tempor sem sed molestie dapibus.Phasellus orci odio,
                        dapibus ut leo id, consectetur convallis mauris.
                    </p>
                    <button type="button" className="story-btn btn-primary">Your Button</button>
                </div>
            </div>
            <hr></hr>
        </div>
    );
};

export default Story;
