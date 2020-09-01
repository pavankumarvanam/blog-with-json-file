import React from 'react';
import './App.css';
import BlogPost from './containers/BlogPost';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';

function App() {
  return (
    <Router>
      <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/post/:slug" component={BlogPost} />
          {/* <BlogPost /> */}
      </div>
    </Router>
  );
}

export default App;
