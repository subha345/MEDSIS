export default function logoutStateReducer(state = { logoutState : true }, action){
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