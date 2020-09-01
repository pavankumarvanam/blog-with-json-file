import React from 'react';
import './index.css';

const NavHeader = (props) => {
    return (
        <div className="NavHeader">
            <div className="container">
                <div className="NavMenu">
                     <ul>
                         <li><a href="#">Home</a></li>
                         <li><a href="#">Posts</a></li>
                         <li><a href="#">Health</a></li>
                         <li><a href="#">Lifestyle</a></li>
                         <li><a href="#">Contact</a></li>
                     </ul>
                </div>
            </div>
        </div>
    );
};

export default NavHeader;