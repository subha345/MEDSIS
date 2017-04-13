import { loginRequest } from '../../services/userloginreq'

function getUserDetail(responseJson){
    return{
        type:"LOGIN_RESPONSE",
        responseJson
    }
}

export const userLoginRequestAction = (userDetails) => (dispatch) => {
    let userDetail = userDetails;
    let responseJson;
    loginRequest(userDetail, (data) => {
        // console.log(data.status)
        (data) ?  responseJson=data.status : console.log("Request Failed")
        // console.log(responseJson)
        dispatch(getUserDetail(responseJson));
    });
}