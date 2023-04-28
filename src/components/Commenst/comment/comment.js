import React from 'react';
import './css.comment.css'
import {Link} from "react-router-dom";
import PostDetails from "../../posr-details/post-details";

const Comment = ({comment}) => {
    const {postId, id, email, name, body} = comment;
    return (
        <div className={'comment'}>
            <Link to={comment.id.toString()} element={<PostDetails/>}>
                <div>Email: {email}</div>
                <div>Name: {name}</div>
                <div>Body: {body}</div>
            </Link>

        </div>
    );
};

export default Comment;