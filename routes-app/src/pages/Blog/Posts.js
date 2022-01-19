import React from 'react'
import {Outlet} from "react-router-dom";

//<Outlet> renders any matching children from a particular route
function Posts() {
    return (
      <div style={{ padding: 20 }}>
        <h2>Blog</h2>
        {/* render any matching child */}
        <Outlet />
      </div>
    );
  }
  export default Posts