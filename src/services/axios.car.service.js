import axios from "axios";
import {carUrl} from "../configs/car.urls";

const axiosServCar = axios.create({baseURL:carUrl})

export {axiosServCar}