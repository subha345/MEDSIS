import { loginCredentialServiceApi } from '../../services/logincredential'

function getUserList(userList){
    return{
        type:"USER_LIST",
        userList
    }
}

export const userListAction = () => dispatch => {
    let userList = [];

    loginCredentialServiceApi((data => {
        console.log(data);
        (data) ? userList=data.users : console.log('error in fetching data')

        dispatch(getUserList(userList))
    }))
}