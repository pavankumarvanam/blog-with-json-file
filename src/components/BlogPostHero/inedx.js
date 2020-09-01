import React from 'react';
import './index.css';

const BlogPostHero = (props) => {
    return (
        <div className="BlogPostHero">
            <div className="blogposthero_img" style={{  
                backgroundImage: "url(" + require('../../assets/two.jpeg') + ")" }} >
                <div className="Breadcrumb">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><i className="fa fa-chevron-right"></i></li>
                        <li><a href="#">Lifestyle</a></li>
                        <li><i className="fa fa-chevron-right"></i></li>
                        <li><a href="#">Post</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogPostHero;