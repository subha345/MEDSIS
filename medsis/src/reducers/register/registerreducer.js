export default function registerStateReducer(state = { registerState : false }, action){
    switch(action.type){
        case 'REGISTER_STATE':
        return {
            ...state,
            registerState : action.registerState
        }
        default:
        return state
    }
}