export function loginRequest(userDetail, actionCallback) {
    fetch('/userDetail', {
            method: 'POST',
            headers: new Headers({
                'Authorization': '',
                'Content-Type': 'application/json',
                'Data-Type': "json"
            }),
            body: JSON.stringify({
                "user": userDetail
            }),
        }).then(response => response.json())
        .then(json => actionCallback(json));
}