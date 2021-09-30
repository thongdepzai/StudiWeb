import { INIT_STATE } from "../../constants";
import { getType, getVideos } from "../actions";

export default function videosReducers(state=INIT_STATE.videos, action){
    switch(action.type){
        case getType(getVideos.getVideosRequest):
            return{
                ...state,
                isLoading: true,
            }
        case getType(getVideos.getVideosSuccess):
            return{
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getVideos.getVideosFailure):
            return{
                ...state,
                isLoading: false,
            }
        default:
            return state;

    }

}