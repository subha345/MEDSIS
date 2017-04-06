export default function tabListReducer(state = { tabState : [] }, action){
    switch(action.type){
        case 'TAB_STATE':
        return {
            ...state,
            tabState : action.tabState
        }
        default:
        return state
    }
}