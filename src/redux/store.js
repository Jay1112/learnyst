import { appReducer } from "./appReducer";
import { combineReducers } from "redux";
import { createStore } from "redux";

const rootReducer = combineReducers({
    app : appReducer
});

export const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));