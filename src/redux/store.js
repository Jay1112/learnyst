import { authReducer } from "./reducers/AuthReducer";
import { appReducer } from "./reducers/AppReducer";
import { combineReducers } from "redux";
import { createStore } from "redux";

const rootReducer = combineReducers({
    auth : authReducer,
    app : appReducer
});

export const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));