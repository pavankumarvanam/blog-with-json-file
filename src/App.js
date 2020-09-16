import React from 'react';
import './App.css';
import BlogPost from './containers/BlogPost';
import { BrowserRouter as HashRouter, Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import AllPosts from './containers/Admin/AllPosts';
import AddPosts from './containers/Admin/AddPosts';

function App() {
  return (
    // <Router>
    //   <div className="App">
    //       <Route path="/" exact component={Home} />
    //       <Route path="/post/:slug" component={BlogPost} />
    //       {/* <BlogPost /> */}
    //   </div>
    // </Router>
    <HashRouter basename='/'>
      <div className="App">
          <Route path="/" exact component={Home} />
           <Route path="/post/:slug" component={BlogPost} />
           <Route path="/admin/all-posts" component={AllPosts} />
           <Route path="/admin/add-post" component={AddPosts} />
       </div>
    </HashRouter>
  );
}

export default App;
