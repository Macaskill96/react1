import React from 'react';

const Album = ({album}) => {
    const {title} = album
    return (
        <div>
           Title: {title}
        </div>
    );
};

export default Album;