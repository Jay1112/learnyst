import { authReducer } from "./reducers/AuthReducer";
import { combineReducers } from "redux";
import { createStore } from "redux";

const rootReducer = combineReducers({
    auth : authReducer
});

export const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));