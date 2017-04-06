export function tabServiceApi(actionCallback){
    fetch('../../config/configtab.json')
    .then(response=> response.json())
    .then(json=>actionCallback(json));
}