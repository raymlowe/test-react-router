import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

//Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Posts from "./pages/Blog/Posts"
import PostLists from './pages/Blog/PostLists'
import Post from './pages/Blog/Post'

//We use <Link> instead of <a>. In React the <a> leads to the refreshing of the page
/*
Nested Routes: with nested routes, we assume that part of the webpage will remain constant and only the 
child part of the webpage changes. 
*/

/*
*a unique slug of a post
*title of that post
*description of that post
*/
const BlogPosts = {
  '1': {
    title: 'First Blog Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adip.'
  },
  '2': {
    title: 'Second Blog Post',
    description: 'Hello React Router v6'
  }
};

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
        <Link to="/posts" style={{ padding: 5 }}>
          Posts
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />}>
          <Route path="/posts/" element={<PostLists BlogPosts={BlogPosts}/>} />
          <Route path="/posts/:slug" element={<Post BlogPosts={BlogPosts}/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
