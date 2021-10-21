import { INIT_STATE } from "../../constants";
import { getType, getDictionary } from "../actions";

export default function DictionarysReducers(state=INIT_STATE.dictionarys, action){
    switch(action.type){
        case getType(getDictionary.getDictionarysRequest):
            return{
                ...state,
                isLoading: true,
            }
        case getType(getDictionary.getDictionarysSuccess):
            return{
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getDictionary.getDictionarysFailure):
            return{
                ...state,
                isLoading: false,
            }
        default:
            return state;

    }

}
