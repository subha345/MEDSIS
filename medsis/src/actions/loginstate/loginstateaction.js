function getLoginState(loginState){
    return{
        type:"LOGIN_STATE",
        loginState
    }
}

export const loginStateAction = (state) => dispatch => {
    let loginState = state;
    dispatch(getLoginState(loginState))
}