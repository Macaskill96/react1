import axios from "axios";
import {baseUrl} from "../constants/urls";

let axiosService = axios.create({baseURL:baseUrl})

export {
    axiosService
}