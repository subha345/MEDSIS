export function loginCredentialServiceApi(actionCallback){
    fetch('../../config/credential.json')
    .then(response=> response.json())
    .then(json=>actionCallback(json));
}