export default function loginResponseReducer(state = { responseJson : '' }, action){
    switch(action.type){
        case 'LOGIN_RESPONSE':
        return {
            ...state,
            responseJson : action.responseJson
        }
        default:
        return state
    }
}