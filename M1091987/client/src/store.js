import {configStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import composeWithDevTools from "redux-devtools-extension";
import { cartReducer } from "./reducer/PizzaReducer";

const rootReducer = combineReducers({
    cartReducer:cartReducer,
});

const initialState={};
const middleware={thunk};

const store=configStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
