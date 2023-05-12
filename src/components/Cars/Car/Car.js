import React from 'react';
import './car.css'
import {carActions} from "../../../redux";
import {useDispatch} from "react-redux";
import {carService} from "../../../services";

const Car = ({car}) => {
    const dispatch = useDispatch();

    const {id, brand, price, year} = car;

    const deletCar = async () => {
        await carService.deleteById(id)
        dispatch(carActions.changeTrigger())
    }

    return (
        <div>
            <div className={'car'}>
                <div>brand:{brand}</div>
                <div>price:{price}</div>
                <div>year:{year}</div>
                <button onClick={()=> dispatch(carActions.setCarForUpdate(car))}>update</button>
                <button onClick={deletCar}>delete</button>
            </div>
        </div>
    );
};

export default Car