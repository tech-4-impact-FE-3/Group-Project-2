import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import listUserReducer from "../reducer/listUserReducer";


const allReducer = combineReducers({
  listUser: listUserReducer
});

const store = createStore(allReducer, applyMiddleware(thunk))
export default store;