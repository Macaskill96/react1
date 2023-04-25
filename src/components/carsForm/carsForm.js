import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";

const CarsForm = ({setNewCars, updateCar}) => {
    const { register, handleSubmit,reset, setValue} = useForm();

    useEffect(()=> {
        if (updateCar) {
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    }, [updateCar])

    const create = async (car) => {
        const {data} = await carService.create(car);
        console.log(data);
        setNewCars (prev => !prev)
        reset()
    }

    const update = async (car) =>
    {
        const {data} = await carService.updateById(updateCar.id, car);
        console.log(data);
        setNewCars (prev => !prev)
        reset()
    }



    return (
        <form onSubmit={handleSubmit(updateCar?update:create)}>
            <input type={'text'} placeholder={'brand'} {...register('brand')} />
            <input type={'text'} placeholder={'price'} {...register('price')} />
            <input type={'text'} placeholder={'year'} {...register('year')}/>
            <button>{updateCar?'Update':'Create'}</button>
        </form>
    );
};
export default CarsForm;