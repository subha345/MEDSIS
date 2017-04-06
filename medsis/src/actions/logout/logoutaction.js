function getLogoutState(logoutState){
    return{
        type:"LOGOUT_STATE",
        logoutState
    }
}

export const logoutStateAction = (state) => dispatch => {
    let logoutState = state;
    dispatch(getLogoutState(logoutState))
}