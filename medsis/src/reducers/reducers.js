import { combineReducers } from 'redux';
import tabListReducer from './tabs/tabreducer'
import panelContentListReducer from './sidepanel/sidepanelreducer'
import logoutStateReducer from './logout/logoutreducer'
import registerStateReducer from './register/registerreducer';
import loginReducer from './login/loginreducer'

export default combineReducers({
    tabListReducer,
    panelContentListReducer,
    logoutStateReducer,
    registerStateReducer,
    loginReducer
})