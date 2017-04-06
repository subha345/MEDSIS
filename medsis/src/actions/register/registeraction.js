function getRegisterState(registerState){
    return{
        type:"REGISTER_STATE",
        registerState
    }
}

export const registerStateAction = (state) => dispatch => {
    let registerState = state;
    dispatch(getRegisterState(registerState))
}