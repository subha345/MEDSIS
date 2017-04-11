export function tabServiceApi(actionCallback){
    fetch('../../config/tabapi.json')
    .then(response=> response.json())
    .then(json=>actionCallback(json));
}