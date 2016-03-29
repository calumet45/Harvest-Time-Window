// Harvest Time Window
// By: Dave Means

var version = "0.3";
chrome.browserAction.onClicked.addListener(harvestWindow);

function harvestWindow() {

    var harvestWindow = chrome.windows.create({ url: "https://carpool.harvestapp.com/time", type: "detached_panel", width: 325, height: 800, top: 0, focused: true });
}