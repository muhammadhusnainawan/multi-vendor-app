import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILS,
} from "../constants/userConstants";

export const userRegisterReducer = (state={}, action)=> {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
           return {loading: true} 
        case USER_REGISTER_SUCCESS:
           return {loading: false, useInfo: action.payload} 
        case USER_REGISTER_FAILS:
           return {loading: false, error: action.payload} 
    
        default:
        return state
    }
}