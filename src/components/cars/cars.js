import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "./car/car";
import CarsForm from "../carsForm/carsForm";

const Cars = () => {
    const [cars, setCars] = useState([])
    const [newCars, setNewCars] = useState(null)
    const [updateCar, setUpdateCar] = useState(null)
    useEffect(()=> {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    }, [newCars])


    return (
        <div>
            <CarsForm setNewCars={setNewCars} updateCar={updateCar}/>
            {cars && cars.map(car =><Car key={car.id} car={car} setUpdateCar={setUpdateCar} setNewCars={setNewCars} />)}
        </div>
    );
};

export default Cars;