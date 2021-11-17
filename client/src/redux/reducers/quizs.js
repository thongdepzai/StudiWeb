import { INIT_STATE } from "../../constants";
import { getType, getQuizs } from "../actions";

export default function quizsReducers(state=INIT_STATE.quizs, action){
    switch(action.type){
        case getType(getQuizs.getQuizsRequest):
            return{
                ...state,
                isLoading: true,
            }
        case getType(getQuizs.getQuizsSuccess):
            return{
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getQuizs.getQuizsFailure):
            return{
                ...state,
                isLoading: false,
            }
        default:
            return state;

    }

}