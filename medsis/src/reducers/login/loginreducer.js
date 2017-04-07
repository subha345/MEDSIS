export default function loginReducer(state = { userList : [] }, action){
    switch(action.type){
        case 'USER_LIST':
        return {
            ...state,
            userList : action.userList
        }
        default:
        return state
    }
}