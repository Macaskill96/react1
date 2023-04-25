import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/comment.service";
import CommentForm from "../commentForm/commentForm";
import Comment from "./comment/comment";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState(null);
    useEffect(() => {
        commentsService.getAll().then(value => value.data).then(value => setComments(value))
    }, [newComment])
    return (
        <div>
            <CommentForm setComments = {setComments}/>
            <hr/>
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/> )}

        </div>
    );
};

export default Comments;