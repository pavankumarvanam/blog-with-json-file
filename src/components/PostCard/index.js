import React, {useState, useEffect} from 'react';
import './index.css';
import postData from '../../data/data.json';

const PostCard = (props) => {
    const [post, setPost] = useState({
        id: "" ,
        blogCategory: "" ,
        blogTitle : "" ,
        postedOn: "" ,
        author: "" ,
        blogImage: "" ,
        blogText: ""
    });
    const [slug, setSlug] = useState('');
    
    
    useEffect(() => {
        const slug = props.match.params.slug;
        console.log(slug);
        const post = postData.data.find(post => post.slug == slug);
        setPost(post);
        setSlug(slug)
    }, [post, props.match.params.slug]);

    if(post.blogImage == "") return null;
    return (
        <div className="PostCard">
            <img src={require('../../assets/' + post.blogImage )} alt="Post Image" />
            <div className="postCardBody">
                <p className="postCat">{post.blogCategory}</p>
                <h1 className="postTitle">{post.blogTitle}</h1>
                <p>
                {post.blogText}
                </p>
                <p>
                lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                 laboris nisi ut aliquip ex ea commodo consequat... 
                </p>
            </div>
        </div>
    );
};

export default PostCard;