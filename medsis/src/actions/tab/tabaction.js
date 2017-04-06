import { tabServiceApi } from '../../services/tabservice'

function gettabState(tabState){
    return{
        type:"TAB_STATE",
        tabState
    }
}

export const tabServiceAction = () => dispatch => {
    let tabArray = [];

    tabServiceApi((data => {
        console.log(data.tabs);
        (data) ? tabArray=data.tabs : console.log('error in fetching data')

        dispatch(gettabState(tabArray))
    }))
}