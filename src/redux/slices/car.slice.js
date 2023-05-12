import {createSlice} from "@reduxjs/toolkit";


let initialState = {
    cars:[],
    carForUpdate: null,
    trigger: null
}

const slice = createSlice({
    name:'carSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload;

        },
        create: (state, {payload}) => {
            state.cars.push(payload);
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        },
        changeTrigger: state => {
            state.trigger = !state.trigger
        }
    }
});

const {reducer:carReducer, actions} = slice;

const carActions = {...actions}



export {carReducer, carActions}