import {axiosService} from "./axios.services";
import {urls} from "../configs/urls";

const commentsService = {
    getAll:() => axiosService.get(urls.comments),
    create:(name) =>axiosService.post(urls.comments, name),
    getById:(id) =>axiosService.get(`${urls.comments}/${id}`),
    updateById:(id, name) =>axiosService.put(`${urls.comments}/${id}`, name),
    deleteById:(id)=> axiosService.delete(`${urls.comments}/${id}`)

}

export {commentsService}