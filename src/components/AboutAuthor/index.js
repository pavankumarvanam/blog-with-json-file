import React from 'react';
import './index.css';

const AboutAuthor = (props) => {
    return (
        <div className="aboutAuthor">
            <img src={require('../../assets/profile.jpeg')} alt="About Author" />
            <div className="authorBody">
                <h2 className="authorName">Pavan Vanam</h2>
                <p className="authorRole">FullStack Developer</p>
                <p className="authorDescp">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt.
                </p>
            </div>
        </div>
    );
};

export default AboutAuthor;