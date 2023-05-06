import React from 'react';

const Cat = ({cat, dispatch}) => {
    const {name, id} = cat;

    const handleDelete = () => {
        dispatch({ type: 'DEL_CAT', payload:id})
    };

    return (
        <div>
            {name}
            <button onClick={handleDelete}>delete</button>
        </div>

    );
};

export default Cat;