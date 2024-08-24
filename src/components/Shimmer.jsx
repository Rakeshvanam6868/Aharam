import React from 'react';
import CardShimmer from './CardShimmer';

const Shimmer = () => {
    return (
        <div className="hero_shimmer">
            <div className="search_shimmer">
                {/* Optional: You could add some shimmer effect for the search bar here */}
            </div>
            <div className="buttons_shimmer">
                <button className="filter-btn_shimmer">
                    {/* Optional: Add shimmer effect for the button here */}
                </button>
            </div>
            <div className="card-grid_shimmer">
                {Array(20).fill(null).map((_, index) => (
                    <CardShimmer key={index} />
                ))}
            </div>
        </div>
    );
};

export default Shimmer;
 