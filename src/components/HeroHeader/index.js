import React from 'react';
import './index.css';

const HeroHeader = (props) => {
    return (
        <div className="HeroHeader">
            <div className="container">
                <h1 className="logo">
                    Optimistic blog
                </h1>
            </div>
        </div>
    );
};

export default HeroHeader;