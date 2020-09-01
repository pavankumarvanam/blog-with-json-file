import React from 'react';
import TopHeader from '../../components/TopHeader';
import HeroHeader from '../../components/HeroHeader';
import NavHeader from '../../components/NavHeader';
import BlogPostHero from '../../components/BlogPostHero/inedx';
import PostCard from '../../components/PostCard';
import SideBar from '../../components/SideBar';

const BlogPost = (props) => {
    return (
        <div>
            <TopHeader />
            <HeroHeader />
            <NavHeader />
            <BlogPostHero />
            <div className="Blogbody">
                <div className="container">
                    <PostCard {...props}/>
                    <SideBar />
                </div>
            </div>
        </div>
    );
};

export default BlogPost;