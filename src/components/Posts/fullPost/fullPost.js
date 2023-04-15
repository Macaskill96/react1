import React from 'react';

const FullPost = ({value}) => {
    return (
        <div>
            <p>
                UserID: { value.userId}<br/>
                ID: {value.id}<br/>
                Title: {value.title}<br/>
                Body: {value.body}<br/>
            </p>

        </div>
    );
};

export default FullPost;