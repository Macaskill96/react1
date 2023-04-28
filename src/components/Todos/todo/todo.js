import React from 'react';


const Todo = ({todo}) => {
    const { userId, title } = todo;

    return (
            <div>
                <p>Title: {title}</p>
            </div>
    );
};

export default Todo;