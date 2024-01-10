import { AppActions } from "../constants/AppReducerConstants"

const initialState = {
    theme : '',
}

export function appReducer(state = initialState,action){
    switch(action.type){
        case AppActions.SET_APP_THEME : 
            return {
                ...state,
                theme : action.payload
            }
        default : return state;
    }
}