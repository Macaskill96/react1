import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const PostDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(response => response.json())
            .then(value => setPost({...value}))
    }, [id]);

    return (
        <div>
            Title: {post && post.title}
        </div>
    );
};

export default PostDetails;