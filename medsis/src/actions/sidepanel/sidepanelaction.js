import { sidepanelService } from '../../services/sidepanelservice'

function gettabsState(tabState){
    return{
        type:"PANEL_TAB_STATE",
        tabState
    }
}

export const sidePanelServiceAction = () => dispatch => {
    let paneltab = [];

    sidepanelService((data => {
        (data) ? paneltab=data.tabs[0].gntitle[0].mailbox : console.log('error in fetching data')

        dispatch(gettabsState(paneltab))
    }))
}