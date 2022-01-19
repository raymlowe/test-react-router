import React from 'react'
import {Link} from 'react-router-dom'

function PostLists({ BlogPosts }) {
    
    //use Object.entries to return and array from BlogPosts
    return (
        <ul>
            {Object.entries(BlogPosts).map(([slug, { title }]) => (
                <Link to={`/posts/${slug}`}>
                    <h3>{title}</h3>
                </Link>
            ))}
        </ul>
    );
}

export default PostLists