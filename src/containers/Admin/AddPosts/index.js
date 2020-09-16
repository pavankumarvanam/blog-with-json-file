import React from 'react';
import './index.css';
import HeroHeader from '../../../components/HeroHeader';
import NavHeader from '../../../components/NavHeader';
import AddPost from '../../../components/Admin/AddPost';
import TopHeader from '../../../components/TopHeader';
import AddImage from '../../../components/Admin/AddImage';

const AddPosts = (props) => {
    return (
        <div className="add-posts">
            <TopHeader />
            <HeroHeader />
            <NavHeader />
            <div className="add-post-block"> 
                {/* <AddImage /> */}
                 <AddPost />
            </div>
        </div>
    );
};

export default AddPosts;