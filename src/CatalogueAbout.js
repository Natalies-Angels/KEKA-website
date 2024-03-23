import React, { useState, useEffect } from 'react';
import './StoryStyle.css';
import { Link } from 'react-router-dom';

const Story = () =>{
    return (
        <div>
          <div className="cta-container">
            <h2>OUR STORY</h2>
          </div>
          <div className="additional-card-section">
            
                <div className="additional-card">
                    <div className="additional-card-image">
                        <img src="/1.png" alt="Additional Image" />
                     </div>
                </div>

                <div className="additional-card-content">
                <h2>Lorem Ipsum</h2><br></br>  
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
            </div>
    );
};
export default Story;