import React, {useReducer} from 'react';
import Dogs from "../components/dogs/dogs";
import Cats from "../components/cats/cats";


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            const cat = action.payload;
            const catID = state.cats.slice(-1)[0]?.id +1 || 1;
            cat.id = catID;
            return {...state, cats:[...state.cats, cat]};

        case 'ADD_DOG':
            const dog = action.payload
            const dogID = state.dogs.slice(-1)[0]?.id+1||1
            dog.id = dogID
            return {...state, dogs:[...state.dogs, dog]}
        case 'DEL_CAT':
            const idForDelete = action.payload
            const newCats = state.cats.filter(cat => cat.id !== idForDelete);
            return { ...state, cats: newCats };

        case 'DEL_DOG':
            const idForDeleteDog = action.payload
            const newDogs = state.dogs.filter(dog=> dog.id !== idForDeleteDog)
            return {...state, dogs: newDogs }
        default:
            return state


    }

}
const DogsCats = () => {
    const stateDispatch = useReducer(reducer, {cats:[], dogs:[]});
    return (
        <div>
            <Dogs stateDispatch={stateDispatch} />
            <Cats stateDispatch={stateDispatch} />
        </div>
    );
};

export default DogsCats;