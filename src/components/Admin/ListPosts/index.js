import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import db from '../../../config/firebase';
import './index.css';

const ListPosts = (props) => {
    const[posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('blogs')
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            setPosts(data);
            console.log(data);
          });
    }, []);
    return (
        <div className="post-block">
            <h3 align="right" style={{marginBottom:30}}>
            <NavLink to={'/admin/add-post'} >Add New Post</NavLink>
            </h3>
            <table>
                <thead>
                    <tr>
                        <th>Blog Title</th>
                        <th>Blog Author</th>
                        <th>Blog Category</th>
                        <th>Acttions</th>
                    </tr>
                </thead>
                <tbody>
                {posts.map( post =>
                    <tr>
                        <td>{post.blogTitle}</td>
                        <td>{post.author}</td>
                        <td>{post.blogCategory}</td>
                        <td>Coming Soon</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default ListPosts;