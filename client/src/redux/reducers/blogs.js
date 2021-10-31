import { INIT_STATE } from "../../constants";
import { getType, getBlogs } from "../actions";



export default function blogsReducers(state=INIT_STATE.blogs, action){
    switch(action.type){
        case getType(getBlogs.getBlogsRequest):
            return{
                ...state,
                isLoading: true,

            }
        case getType(getBlogs.getBlogsSuccess):
            return{
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getBlogs.getBlogsFailure):
            return{
                ...state,
                isLoading: false,

            }
        default:
            return state;

    }

}