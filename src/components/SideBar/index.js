import React from 'react';
import './index.css';
import AboutAuthor from '../AboutAuthor';
import RelatedPosts from '../RelatedPosts/inedx';

const SideBar = (props) => {
    return (
        <div className="Sidebar">
            <AboutAuthor />
            <RelatedPosts />
        </div>
    );
};

export default SideBar;