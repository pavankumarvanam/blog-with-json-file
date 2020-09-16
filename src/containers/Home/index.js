import React, {useState, useEffect} from 'react';
import SideBar from '../../components/SideBar';
import TopHeader from '../../components/TopHeader';
import HeroHeader from '../../components/HeroHeader';
import NavHeader from '../../components/NavHeader';
import PostPreview from '../../components/PostPreview';
import './index.css';
import postData from '../../data/data.json';

const Home = () => {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        setPost(postData);
    }, []);

    return (
        <div className="Home">
            <TopHeader />
            <HeroHeader />
            <NavHeader />
            <div class="homeBody">
                <div class="postPreviewGroup">
                    <PostPreview previewposts={posts} />
                </div>
                <SideBar />
            </div>

            
        </div>
    );
};

export default Home;