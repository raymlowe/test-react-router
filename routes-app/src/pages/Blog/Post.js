import React from 'react'
import {useParams} from 'react-router-dom'

//useParams is a hook that allows access to dynamic parameters that a route / slug may have
function Post( {BlogPosts} ) {
    const { slug } = useParams();
    const post = BlogPosts[slug];
    const { title, description } = post;
    return (
        <div style={{ padding: 20 }}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
export default Post