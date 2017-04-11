import { loginRequest } from '../../services/userloginreq'

function getUserDetail(userDetail){
    return{
        type:"USER_DETAIL",
        userDetail
    }
}

export const userLoginRequestAction = (userDetail) => dispatch => {
    let userDetail = userDetail;
    loginRequest(userDetail, (data) => {
        if (data) {
           console.log(data)
            } else {
            console.log("Request Failed")
        }
        dispatch(getUserDetail(userDetail));
    });
}