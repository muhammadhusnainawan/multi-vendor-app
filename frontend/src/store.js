import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {userRegisterReducer} from "../src/reducers/userReducers"



const reducer = combineReducers({
    userInfo:userRegisterReducer
})

const initialState={}
const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
