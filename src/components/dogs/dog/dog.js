import React from 'react';

const Dog = ({dog, dispatch}) => {
    const {id, name} = dog;

    const deleteDog = () => {
        dispatch({type:'DEL_DOG', payload:id})
    }
    return (
        <div>
            {name}
            <button onClick={deleteDog}>delete</button>
        </div>
    );
};

export default Dog;