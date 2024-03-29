import { AuthActions } from "../constants/AuthConstants"

const initialState = {
    user : null,
    isLoggedIn : false
}

export function authReducer(state = initialState,action){
    switch(action.type){
        case AuthActions.SET_USER_DATA : 
            return {
                ...state,
                user : action.payload
            }
        
        case AuthActions.SET_LOGIN_SUCCESS : 
            return {
                ...state,
                isLoggedIn : true
            }

        case AuthActions.SET_LOGOUT : 
            return {
                ...state,
                isLoggedIn : false
            }

        default : return state;
    }
}