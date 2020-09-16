import React, {useState, useEffect} from 'react';
import './index.css';
import firebase from "firebase";
import db from '../../../config/firebase';
import FileUploader from "react-firebase-file-uploader";

const AddPost = (props) => {
    // const state = {
    //     username: "",
    //     avatar: "",
    //     isUploading: false,
    //     progress: 0,
    //     avatarURL: ""
    //   };
      const [Image, setImage] = useState({
        username: "",
        avatar: "",
        isUploading: false,
        progress: 0,
        avatarURL: ""
      });
    // const[avatar, setAvatar] = useState('');
    // const[isUploading, setIsUploading] = useState(false);
    // const[progress, setProgress] = useState(0);
    // const[avatarURL, setAvatarURL] = useState('');
    

    const handleUploadStart = () => setImage({ isUploading: true, progress: 0 });
    const handleProgress = progress => setImage({ progress });
    const handleUploadError = error => {
        setImage({ isUploading: false });
      console.error(error);
    };
    const handleUploadSuccess = filename => {
        setImage({ avatar: filename, progress: 100, isUploading: false });
      firebase
        .storage()
        .ref("images")
        .child(filename)
        .getDownloadURL()
        .then(url => setImage({ avatarURL: url }));
        // console.log('Image.avatarURL');
    };
    const[blogtitle, setBlogTitle] = useState(''); 
    const[blogslug, setBlogslug] = useState(''); 
    const[author, setAuthor] = useState(''); 
    const[blogcategory, setBlogCategory] = useState(''); 
    const[blogText, setBlogText] = useState(''); 
    const[blogThumb, setBlogThumb] = useState(''); 
    const[hiddenImg, setHiddenImg] = useState('');
    let r = Math.random().toString(36).substring(7);
    
    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(event.target.blog_title.value);
        setBlogslug(event.target.blog_slug.value);
        setBlogTitle(event.target.blog_title.value);
        setAuthor(event.target.author.value);
        setBlogCategory(event.target.blogcategory.value);
        setBlogText(event.target.blogtext.value);
        const s_hiddenimg = event.target.hiddenimage.value;
        setHiddenImg(s_hiddenimg);
        console.log(event.target.hiddenimage.value);
        db.collection("blogs").doc(r).set({
            blogTitle: blogtitle,
            author: author,
            blogCategory: blogcategory,
            blogText: blogText,
            blogImage:event.target.hiddenimage.value,
            slug:blogslug
        })
        .then(function() {
            console.log("Document successfully written!");
            alert('Yay, Created a post!');
            window.location = '/admin/all-posts';
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }

    useEffect(() => {
        // db.collection("blogs").doc("LA").set({
        //     name: "Los Angeles",
        //     state: "CA",
        //     country: "USA"
        // })
        // .then(function() {
        //     console.log("Document successfully written!");
        // })
        // .catch(function(error) {
        //     console.error("Error writing document: ", error);
        // });
    });
    return (
        <div className="add-post">
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>Blog Title</td>
                        <td>
                            <input type="text" name="blog_title" placeholder="Enter blog title" onChange={e => setBlogTitle(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Blog Slug</td>
                        <td>
                            <input type="text" name="blog_slug" placeholder="Enter blog slug" onChange={e => setBlogslug(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Blog Author</td>
                        <td>
                            <input type="text" name="author" placeholder="Enter author name" onChange={e => setAuthor(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Blog Category</td>
                        <td>
                            <input type="text" name="blogcategory" placeholder="Enter blog category"  onChange={e => setBlogCategory(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Blog Category</td>
                        <td>
                            <textarea name="blogtext" placeholder="Enter blog description.." onChange={e => setBlogText(e.target.value)}>
                               
                            </textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>Blog Thumb</td>
                        <td>
                            <FileUploader
                                accept="image/*"
                                name="avatar"
                                randomizeFilename
                                storageRef={firebase.storage().ref("images")}
                                onUploadStart={handleUploadStart}
                                onUploadError={handleUploadError}
                                onUploadSuccess={handleUploadSuccess}
                                onProgress={handleProgress}
                            />
                            {Image.avatarURL && <img style={{ width:'100px' }} src={Image.avatarURL} alt="image"  />}
                            {Image.avatarURL && <input type="hidden" name="hiddenimage" value={Image.avatarURL} />}
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit">Add Post</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default AddPost;