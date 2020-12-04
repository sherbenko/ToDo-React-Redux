import {reducer as formReducer} from "redux-form";
import {combineReducers} from "redux";
import postReducer from "./postReducer";

const RootReducers = combineReducers({
    postReducer,
    form: formReducer
})
export default RootReducers;