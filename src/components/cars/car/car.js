import React from 'react';
import {carService} from "../../../services/car.service";


const Car = ({car, setUpdateCar, setNewCars}) => {
    const {id, brand, price, year} = car;

    const delCar = async ()=> {
        const {data} = await carService.deleteById(id)
        console.log(data);
        setNewCars (prev => !prev)
    }

    return (
        <div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={()=>setUpdateCar(car)}>Update</button>
            <button onClick={()=>delCar()}>Delete</button>
        </div>
    );
};

export default Car;