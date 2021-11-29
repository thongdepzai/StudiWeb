import { INIT_STATE } from "../../constants";
import { getType, getMyCourse } from "../actions";


export default function mycoursesReducers(state=INIT_STATE.mycourses, action){
    switch(action.type){
        case getType(getMyCourse.getMyCoursesRequest):
            return{
                ...state,
                isLoading: true,
            }
        case getType(getMyCourse.getMyCoursesSuccess):
            return{
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getMyCourse.getMyCoursesFailure):
            return{
                ...state,
                isLoading: false,
            }
        default:
            return state;

    }

}