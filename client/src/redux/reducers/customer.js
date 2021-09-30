import { INIT_STATE } from "../../constants";
import { getType, getLogin } from "../actions";

export default function customersReducers(state=INIT_STATE.customers, action){
    switch(action.type){
        case getType(getLogin.getLoginRequest):
            return{
                ...state,
                isLoading: true,

            }
        case getType(getLogin.getLoginSuccess):
            return{
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getLogin.getLoginFailure):
            return{
                ...state,
                isLoading: false,

            }
        default:
            return state;

    }

}