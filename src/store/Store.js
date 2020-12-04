import {createStore} from "redux";
import RootReducers from "../reducers/RootReducers";

const Store = createStore(RootReducers);

export default Store;