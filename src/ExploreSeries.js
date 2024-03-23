import React from 'react';
import { Link } from "react-router-dom";
import './ExploreSeries.css'; // Import your CSS file for styling

const ExploreSeries = () => {
  return (
    <div>
      <div className="card-container">
        <div className="card">
          <Link to="/floor-rugs " className='LinkTo'>
            <div className="card-content">
              <div className="image-container">
                <img src="/All 3.png" alt="Series" />
              </div>
              <div className="text-container">
                <h4>do good</h4>
                <p>In the enchanting realm of KEKA's tufted tapestries, the 'Do Good' series unfolds as a captivating trilogy, comprising three editions: 'Jicho,' 'Domo,' and 'Skio.' Each edition converges to weave an interconnected tale.</p>
                <button className="btn">Explore Series</button>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className='stay-tuned'><h5>stay tuned for more</h5></div>
    </div>
  );
}

export default ExploreSeries;
