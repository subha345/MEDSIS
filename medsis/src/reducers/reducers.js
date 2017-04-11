import { combineReducers } from 'redux';
import tabListReducer from './tabs/tabreducer'
import loginStateReducer from './loginstate/loginstatereducer'

export default combineReducers({
    tabListReducer,
    loginStateReducer
})