import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import car from "../Cars/Car/Car";

const CarForm = () => {
    const {reset, handleSubmit, register, setValue} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector (state => state.cars)

    useEffect(()=> {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);

    const create = async (car) => {
        await carService.create(car)
        dispatch(carActions.changeTrigger())
        reset();
    };

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        dispatch(carActions.changeTrigger())
        reset();
    }



    return (
        <form onSubmit={handleSubmit(carForUpdate?update:create)}>
            <input type={'text'} placeholder={'brand'} {...register('brand')} />
            <input type={'text'} placeholder={'price'} {...register('price')} />
            <input type={'text'} placeholder={'year'} {...register('year')} />
            <button>create</button>
        </form>
    );
};

export default CarForm;