import React from 'react';

const Comment = ({comment}) => {
    const {name, email, body} = comment;
    return (
        <div style={{margin: '25px'}}>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>

        </div>
    );
};

export default Comment;