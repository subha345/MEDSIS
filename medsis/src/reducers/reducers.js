import { combineReducers } from 'redux';
import tabListReducer from './tabs/tabreducer'
import loginStateReducer from './loginstate/loginstatereducer'
import loginResponseReducer from './loginresponse/loginresponse'

export default combineReducers({
    tabListReducer,
    loginStateReducer,
    loginResponseReducer
})