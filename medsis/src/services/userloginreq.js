export function loginRequest(userDetail, actionCallback) {
    fetch('https://dev.health5c.com:8443/ccp-services/authenticate', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body:JSON.stringify({
                "userName":userDetail.userName,
                "password":userDetail.password
            })
    
        }).then(response => response.json())
        .then(json => actionCallback(json))
}