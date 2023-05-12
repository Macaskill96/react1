import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll:()=> axiosService.get(urls.cars),
    create:(brand) =>axiosService.post(urls.cars, brand),
    updateById:(id, name) =>axiosService.put(`${urls.cars}/${id}`, name),
    deleteById:(id)=> axiosService.delete(`${urls.cars}/${id}`)
}

export {carService}