export default function logoutStateReducer(state = { logoutState : false }, action){
    switch(action.type){
        case 'LOGOUT_STATE':
        return {
            ...state,
            logoutState : action.logoutState
        }
        default:
        return state
    }
}