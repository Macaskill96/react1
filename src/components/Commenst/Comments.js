import React, {useEffect, useState} from 'react';
import Comment from "./comment/comment";
import {Outlet} from "react-router-dom";

const Comments = () => {
    const [comments, setComments] = useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(value => setComments(value))
    })
    return (
        <div>
            <div>
                <h4>Post title</h4>
                <Outlet/>
            </div>


           <div>
               {
                   comments.map(comment => <Comment key={comment.id} comment={comment}/>)
               }
           </div>

        </div>


    );
};

export default Comments;