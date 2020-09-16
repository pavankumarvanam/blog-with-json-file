import React, {useState, useEffect} from 'react';
import './index.css';
import postData from '../../data/data.json';
import { NavLink } from 'react-router-dom';
import db from '../../config/firebase';

const PostPreview = (props) => {
    const [loopposts, setLoopposts] = useState([]); 
    const[firePosts, setFirePosts] = useState([]);
    useEffect(()=>{
        setLoopposts(postData.data);
        // console.log(database.collection('blogs').doc().get());
        db.collection("blogs")
        .get()
        .then(querySnapshot => {
          const data2 = querySnapshot.docs.map(doc => doc.data());
          console.log(data2); // array of cities objects
          setFirePosts(data2);
        });
        
        
    },[]);
    
    return(
      firePosts.map( (post) => 
        {if(post.blogImage != undefined){
          return(
            <NavLink to={'post/' + post.slug} >
            <div className="PostPreview">
                <div className="PreviewBox">
                <img src={post.blogImage} alt="PostPreview" />
                {/* {post.blogImage} */}
                    <div className="PreviewFooter">
                            <p className="previewCat">{post.blogCategory}</p>
                            <h2 className="previewTitle">{post.blogTitle}</h2>
                    </div>
                </div>
            </div>
            </NavLink>
          );}else{
            return(
              <NavLink to={'post/' + post.slug} >
              <div className="PostPreview">
                  <div className="PreviewBox">
                      <div className="PreviewFooter">
                              <p className="previewCat">{post.blogCategory}</p>
                              <h2 className="previewTitle">{post.blogTitle}</h2>
                      </div>
                  </div>
              </div>
              </NavLink>
            );
          }
        }
        // <NavLink to={'post/' + post.slug} >
        // <div className="PostPreview">
        //     <div className="PreviewBox">
        //       {/* if(post.blogImage != 'undefined'){
        //         return(
        //           <img src={require('../../assets/' + post.blogImage )} alt="PostPreview" />
        //         );
        //       } */}
        //       {console.log(post.blogImage)}
                 
                
        //          <div className="PreviewFooter">
        //                 <p className="previewCat">{post.blogCategory}</p>
        //                 <h2 className="previewTitle">{post.blogTitle}</h2>
        //          </div>
        //     </div>
        // </div>
        // </NavLink>
        )
    );
};

export default PostPreview;