import React from 'react';
import './index.css';
import AboutAuthor from '../AboutAuthor';
import RelatedPosts from '../RelatedPosts/inedx';
import CountryList from '../CountryList';

const SideBar = (props) => {
    return (
        <div className="Sidebar">
            <AboutAuthor />
            <RelatedPosts />
            <CountryList />
        </div>
    );
};

export default SideBar;