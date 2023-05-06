import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

class CommentsService {
    getAll() {
        return axiosService.get(urls.comments)
    }
}

export const commentService = new CommentsService()