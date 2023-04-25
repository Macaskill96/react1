
import {axiosServCar} from "./axios.car.service";
import {carURls} from "../configs/car.urls";

const carService = {
    getAll:() => axiosServCar.get(carURls.cars),
    create:(brand) =>axiosServCar.post(carURls.cars, brand),
    getById:(id) =>axiosServCar.get(`${carURls.cars}/${id}`),
    updateById:(id, name) =>axiosServCar.put(`${carURls.cars}/${id}`, name),
    deleteById:(id)=> axiosServCar.delete(`${carURls.cars}/${id}`)
}

export {carService}