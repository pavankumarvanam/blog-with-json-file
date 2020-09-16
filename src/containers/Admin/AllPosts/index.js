import React from 'react';
import NavHeader from '../../../components/NavHeader';
import HeroHeader from '../../../components/HeroHeader';
import TopHeader from '../../../components/TopHeader';
import ListPosts from '../../../components/Admin/ListPosts';
import './index.css';

const AllPosts = (props) => {
    return (
        <div className="admin-all-posts">
            <TopHeader />
            <HeroHeader />
            <NavHeader />
            <div className="list-post-body">
                <ListPosts />
            </div>
        </div>
    );
};

export default AllPosts;