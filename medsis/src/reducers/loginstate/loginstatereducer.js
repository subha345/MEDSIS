export default function loginStateReducer(state = { loginState : false }, action){
    switch(action.type){
        case 'LOGIN_STATE':
        return {
            ...state,
            loginState : action.loginState
        }
        default:
        return state
    }
}