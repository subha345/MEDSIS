export default function panelContentListReducer(state = { tabState : [] },action){
    switch (action.type) {
        case 'PANEL_TAB_STATE':
            return{
                ...state,
                tabState: action.tabState
            }
    
        default:
            return state
    }
}