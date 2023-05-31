import { combineReducers } from "redux";
import equateReducer from "./slices/EquateSlice";
import authReducer from "./slices/AuthSlice"
export default combineReducers({
    auth: authReducer,
    equate: equateReducer
})