import React, {useState, useEffect} from 'react';
import './index.css';
import postData from '../../data/data.json';
import { NavLink } from 'react-router-dom';

const RelatedPosts = (props) => {
    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        const posts = postData.data;
        setPosts(posts);
    }, [posts]);
    return (
        <div className="relatedPosts">
            <h2 className="relatedHead">Related Posts</h2>
            <ul>
                {posts.map(post => {
                    return(
                    <li><NavLink key={post.id} to={`/post/${post.slug}`}>{post.blogTitle}</NavLink></li>
                    );
                })}
            </ul>
        </div>
    );
};

export default RelatedPosts;