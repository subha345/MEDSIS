export function sidepanelService(actionCallback){
    fetch('../../config/sidepanel.json')
    .then(response => response.json())
    .then(json =>actionCallback(json))
}