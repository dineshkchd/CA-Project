import { combineReducers } from "redux";
import auth from "./auth";
import customer from "./customer";


const appReducer = combineReducers({
    auth,customer
});

const rootReducer = (state,action)=>{
    return appReducer(state,action)
}

export default rootReducer