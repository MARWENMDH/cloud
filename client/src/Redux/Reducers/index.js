import ErrorReducer from "./ErrorReducer";
import UserReducer from "./UserReducer";
import {combineReducers} from"redux"

const rootReducer=combineReducers({UserReducer,ErrorReducer})
export default rootReducer