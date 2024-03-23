import React from 'react';
import './FAQstyle.css';

const FAQ = () => {
    const openModal = (answer) => {
        document.getElementById('modal-content').innerHTML = answer;
        document.getElementById('modal').style.display = 'flex';
    };

    const closeModal = () => {
        document.getElementById('modal').style.display = 'none';
    };

    return (
        <div className="faq-container">
            <div className="faq-item" id='our-pricing' onClick={() => openModal('Answer to FAQ Question 1')}>
                FAQ Question 1
            </div>

            {/* Add more FAQ items as needed */}

            <div className="modal" id="modal" onClick={closeModal}>
                <div className="modal-content">
                    <span className="close-modal">&times;</span>
                    <div id="modal-content"></div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
