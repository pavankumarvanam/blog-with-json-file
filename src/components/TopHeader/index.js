import React from 'react';
import './index.css';

const TopHeader = (props) => {
    return (
        <div className="TopHeader">
            <div className="container">
                <div className="searchBox">
                    <span><i className="fa fa-search"></i></span>
                    <input type="text" class="searchInput" placeholder="Search.." />
                </div>
                <div className="SocialBox">
                     <ul>
                         <li><i className="fa fa-facebook"></i></li>
                         <li><i className="fa fa-twitter"></i></li>
                         <li><i className="fa fa-instagram"></i></li>
                         <li><i className="fa fa-youtube"></i></li>
                     </ul>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;