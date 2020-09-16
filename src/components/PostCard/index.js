import React, {useState, useEffect} from 'react';
import './index.css';
import postData from '../../data/data.json';
import db from '../../config/firebase';

const PostCard = (props) => {
    // const [post, setPost] = useState({
    //     id: "" ,
    //     blogCategory: "" ,
    //     blogTitle : "" ,
    //     postedOn: "" ,
    //     author: "" ,
    //     blogImage: "" ,
    //     blogText: ""
    // });
    const [firepost, setFirePost] = useState({
        blogCategory: "123" ,
        blogTitle : "" ,
        postedOn: "" ,
        author: "" ,
        blogImage: "" ,
        blogText: ""
    });
    const [slug, setSlug] = useState('');
    
    
    useEffect(() => {
        const slug = props.match.params.slug;
        // console.log(slug);
        // const post = postData.data.find(post => post.slug == slug);
        // console.log(post);
        // setPost(post);
        setSlug(slug);

        db.collection("blogs")
        .where("slug", "==", slug)
        .get()
        .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(querySnapshot.docs);
        // console.log(data['0']); // array of cities objects
        setFirePost(data['0']);
        });
    }, [props.match.params.slug]);

    // if(firepost.blogImage == "") return null;
    return (
        <div className="PostCard">
            <img src={firepost.blogImage} alt="Post Image" />
            <div className="postCardBody">
                <p className="postCat">{firepost.blogCategory}</p>
                <h1 className="postTitle">{firepost.blogTitle}</h1>
                <p>
                {firepost.blogText}
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